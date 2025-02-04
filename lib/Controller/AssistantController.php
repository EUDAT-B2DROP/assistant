<?php

/**
 * SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Assistant\Controller;

use OCA\Assistant\AppInfo\Application;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\Attribute\OpenAPI;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IConfig;
use OCP\IRequest;
use OCP\TaskProcessing\Exception\Exception;
use OCP\TaskProcessing\IManager as ITaskProcessingManager;
use OCP\TaskProcessing\Task;

#[OpenAPI(scope: OpenAPI::SCOPE_IGNORE)]
class AssistantController extends Controller {

	public function __construct(
		string $appName,
		IRequest $request,
		private ITaskProcessingManager $taskProcessingManager,
		private IInitialState $initialStateService,
		private IConfig $config,
		private ?string $userId,
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * @param int $taskId
	 * @return TemplateResponse
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function getAssistantTaskResultPage(int $taskId): TemplateResponse {
		if ($this->userId !== null) {
			try {
				$task = $this->taskProcessingManager->getTask($taskId);
				if ($task->getUserId() === $this->userId) {
					$this->initialStateService->provideInitialState('task', $task->jsonSerialize());
					return new TemplateResponse(Application::APP_ID, 'assistantPage');
				}
			} catch (Exception|\Throwable $e) {
			}
		}
		return new TemplateResponse('', '403', [], TemplateResponse::RENDER_AS_ERROR, Http::STATUS_FORBIDDEN);
	}

	/**
	 * @return TemplateResponse
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function getAssistantStandalonePage(): TemplateResponse {
		if ($this->userId !== null) {
			$task = new Task(
				$this->config->getUserValue($this->userId, Application::APP_ID, 'last_task_type'),
				['something' => ''],
				Application::APP_ID,
				$this->userId,
				''
			);
			$serializedTask = $task->jsonSerialize();
			// otherwise the task id is 0 and the default input shape values are not set
			$serializedTask['id'] = null;
			$this->initialStateService->provideInitialState('task', $serializedTask);
			return new TemplateResponse(Application::APP_ID, 'assistantPage');
		}
		return new TemplateResponse('', '403', [], TemplateResponse::RENDER_AS_ERROR, Http::STATUS_FORBIDDEN);
	}
}
