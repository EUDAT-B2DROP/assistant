<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\Assistant\Controller;

use Exception;
use OCA\Assistant\ResponseDefinitions;
use OCA\Assistant\Service\Text2Image\Text2ImageHelperService;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\AnonRateLimit;
use OCP\AppFramework\Http\Attribute\BruteForceProtection;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\Attribute\OpenAPI;
use OCP\AppFramework\Http\Attribute\PublicPage;
use OCP\AppFramework\Http\DataDisplayResponse;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\OCSController;

use OCP\Files\NotPermittedException;
use OCP\IL10N;
use OCP\IRequest;
use OCP\TextToImage\Exception\TaskFailureException;

/**
 * @psalm-import-type AssistantImageProcessPromptResponse from ResponseDefinitions
 * @psalm-import-type AssistantImageGenInfo from ResponseDefinitions
 */
class Text2ImageApiController extends OCSController {
	public function __construct(
		string $appName,
		IRequest $request,
		private Text2ImageHelperService $text2ImageHelperService,
		private ?string $userId,
		private IL10N $l10n,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * Run or schedule an image generation task
	 *
	 * @param string $appId App id to be set in the created task
	 * @param string $identifier Identifier to be set in the created task
	 * @param string $prompt Input prompt for the image
	 * @param int $nResults Number of images to generate
	 * @param bool $displayPrompt Option to include the prompt when displaying the result images
	 * @param bool $notifyReadyIfScheduled Whether a notification will be produced when the tasks has run if it was scheduled
	 * @param bool $schedule Force scheduling even if the task could run synchronously
	 * @return DataResponse<Http::STATUS_OK, array{task: AssistantImageProcessPromptResponse}, array{}>|DataResponse<Http::STATUS_BAD_REQUEST, array{error: string}, array{}>
	 *
	 * 200: Task started successfully
	 * 400: Starting task is not possible
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[OpenAPI(scope: OpenAPI::SCOPE_DEFAULT, tags: ['image_generation'])]
	public function processPrompt(
		string $appId, string $identifier, string $prompt, int $nResults = 1, bool $displayPrompt = false,
		bool $notifyReadyIfScheduled = false, bool $schedule = false
	): DataResponse {
		$nResults = min(10, max(1, $nResults));
		try {
			$result = $this->text2ImageHelperService->processPrompt(
				$appId, $identifier, $prompt, $nResults, $displayPrompt, $this->userId, $notifyReadyIfScheduled, $schedule
			);
		} catch (Exception | TaskFailureException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}

		return new DataResponse($result);
	}

	/**
	 * Get one image of a generation
	 *
	 * @param string $imageGenId ID of the image generation
	 * @param int $fileNameId ID of the file name
	 * @return DataDisplayResponse<Http::STATUS_OK, array{Content-Type: string}>|DataResponse<Http::STATUS_INTERNAL_SERVER_ERROR|Http::STATUS_BAD_REQUEST, array{error: string}, array{}>
	 *
	 * 200: Returns the image data
	 * 400: Getting image is not possible
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[PublicPage]
	#[BruteForceProtection(action: 'imageGenId')]
	#[OpenAPI(scope: OpenAPI::SCOPE_DEFAULT, tags: ['image_generation'])]
	public function getImage(string $imageGenId, int $fileNameId): DataDisplayResponse | DataResponse {
		try {
			$result = $this->text2ImageHelperService->getImage($imageGenId, $fileNameId);
		} catch (Exception $e) {
			/** @var Http::STATUS_INTERNAL_SERVER_ERROR|Http::STATUS_BAD_REQUEST $exceptionCode */
			$exceptionCode = (int) $e->getCode();
			$response = new DataResponse(['error' => $e->getMessage()], $exceptionCode);
			if ($exceptionCode === Http::STATUS_BAD_REQUEST || $exceptionCode === Http::STATUS_UNAUTHORIZED) {
				// Throttle brute force attempts
				$response->throttle(['imageGenId' => $imageGenId, 'fileId' => $fileNameId, 'status' => $exceptionCode]);
			}
			return $response;
		}

		/*
		if (isset($result['processing'])) {
			return new DataResponse($result, Http::STATUS_OK);
		}
		*/

		/** @var string $contentType */
		$contentType = $result['content-type'];
		$contentType ??= 'image/jpeg';

		$response = new DataDisplayResponse(
			$result['image'] ?? '',
			Http::STATUS_OK,
			['Content-Type' => $contentType]
		);
		$response->cacheFor(60 * 60 * 24);
		return $response;
	}

	/**
	 * Get image generation information
	 *
	 * @param string $imageGenId ID of the generation info
	 * @return DataResponse<Http::STATUS_OK, AssistantImageGenInfo, array{}>|DataResponse<Http::STATUS_BAD_REQUEST|Http::STATUS_NOT_FOUND|Http::STATUS_INTERNAL_SERVER_ERROR, array{error: string}, array{}>
	 *
	 * 200: Returns the requested data
	 * 400: The image generation does not exist
	 * 404: The image generation has been deleted
	 * 500: Other error
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[PublicPage]
	#[BruteForceProtection(action: 'imageGenId')]
	#[OpenAPI(scope: OpenAPI::SCOPE_DEFAULT, tags: ['image_generation'])]
	public function getGenerationInfo(string $imageGenId): DataResponse {
		try {
			$result = $this->text2ImageHelperService->getGenerationInfo($imageGenId, $this->userId, true);
		} catch (Exception $e) {
			/** @var Http::STATUS_BAD_REQUEST|Http::STATUS_NOT_FOUND|Http::STATUS_INTERNAL_SERVER_ERROR $exceptionCode */
			$exceptionCode = (int) $e->getCode();
			$response = new DataResponse(['error' => $e->getMessage()], $exceptionCode);
			if ($exceptionCode === Http::STATUS_BAD_REQUEST || $exceptionCode === Http::STATUS_UNAUTHORIZED) {
				// Throttle brute force attempts
				$response->throttle(['imageGenId' => $imageGenId, 'status' => $exceptionCode]);
			}
			return $response;
		}

		return new DataResponse($result, Http::STATUS_OK);
	}

	/**
	 * Set visibility of images in one generation
	 *
	 * @param string $imageGenId ID of the image generation
	 * @param array<string, mixed> $fileVisStatusArray New file visibilities
	 * @return DataResponse<Http::STATUS_OK, '', array{}>|DataResponse<Http::STATUS_BAD_REQUEST|Http::STATUS_UNAUTHORIZED|Http::STATUS_INTERNAL_SERVER_ERROR, array{error: string}, array{}>
	 *
	 * 200: Visiblity set successfully
	 * 400: Setting visibility is not possible
	 * 401: Setting visibility is not allowed
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[BruteForceProtection(action: 'imageGenId')]
	#[OpenAPI(scope: OpenAPI::SCOPE_DEFAULT, tags: ['image_generation'])]
	public function setVisibilityOfImageFiles(string $imageGenId, array $fileVisStatusArray): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => $this->l10n->t('Failed to set visibility of image files; unknown user')], Http::STATUS_INTERNAL_SERVER_ERROR);
		}

		if (count($fileVisStatusArray) < 1) {
			return new DataResponse(['error' => 'File visibility array empty'], Http::STATUS_BAD_REQUEST);
		}

		try {
			$this->text2ImageHelperService->setVisibilityOfImageFiles($imageGenId, $fileVisStatusArray, $this->userId);
		} catch (Exception $e) {
			/** @var Http::STATUS_BAD_REQUEST|Http::STATUS_UNAUTHORIZED|Http::STATUS_INTERNAL_SERVER_ERROR $exceptionCode */
			$exceptionCode = (int) $e->getCode();
			$response = new DataResponse(['error' => $e->getMessage()], $exceptionCode);
			if($exceptionCode === Http::STATUS_BAD_REQUEST || $exceptionCode === Http::STATUS_UNAUTHORIZED) {
				// Throttle brute force attempts
				$response->throttle(['imageGenId' => $imageGenId, 'status' => $exceptionCode]);
			}
			return $response;
		}

		return new DataResponse('', Http::STATUS_OK);
	}

	/**
	 * Notify when image generation is ready
	 *
	 * Does not need bruteforce protection since we respond with success anyways
	 * as we don't want to keep the front-end waiting.
	 * However, we still use rate limiting to prevent timing attacks.
	 *
	 * @param string $imageGenId ID of the image generation
	 * @return DataResponse<Http::STATUS_OK, '', array{}>|DataResponse<Http::STATUS_INTERNAL_SERVER_ERROR, array{error: string}, array{}>
	 *
	 * 200: Ready notification enabled successfully
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[AnonRateLimit(limit: 10, period: 60)]
	#[OpenAPI(scope: OpenAPI::SCOPE_DEFAULT, tags: ['image_generation'])]
	public function notifyWhenReady(string $imageGenId): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => $this->l10n->t('Failed to notify when ready; unknown user')], Http::STATUS_INTERNAL_SERVER_ERROR);
		}

		try {
			$this->text2ImageHelperService->notifyWhenReady($imageGenId, $this->userId);
		} catch (Exception $e) {
			// Ignore
		}
		return new DataResponse('', Http::STATUS_OK);
	}

	/**
	 * Cancel image generation
	 *
	 * Does not need bruteforce protection since we respond with success anyways
	 * (In theory bruteforce may be possible by a response timing attack but the attacker
	 * won't gain access to the generation since its deleted during the attack.)
	 *
	 * @param string $imageGenId ID of the image generation
	 * @return DataResponse<Http::STATUS_OK, '', array{}>|DataResponse<Http::STATUS_INTERNAL_SERVER_ERROR, array{error: string}, array{}>
	 * @throws NotPermittedException
	 *
	 * 200: Generation canceled successfully
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	#[AnonRateLimit(limit: 10, period: 60)]
	#[OpenAPI(scope: OpenAPI::SCOPE_DEFAULT, tags: ['image_generation'])]
	public function cancelGeneration(string $imageGenId): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => $this->l10n->t('Failed to cancel generation; unknown user')], Http::STATUS_INTERNAL_SERVER_ERROR);
		}

		$this->text2ImageHelperService->cancelGeneration($imageGenId, $this->userId);
		return new DataResponse('', Http::STATUS_OK);
	}
}
