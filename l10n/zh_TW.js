OC.L10N.register(
    "assistant",
    {
    "Nextcloud Assistant" : "Nextcloud 小幫手",
    "Task for \"%1$s\" has finished" : "「%1$s」任務已結束",
    "\"%1$s\" task for \"%2$s\" has finished" : "「%2$s」的「%1$s」任務已結束",
    "Input: %1$s" : "輸入：%1$s",
    "View results" : "檢視結果",
    "Task for \"%1$s\" has failed" : "「%1$s」任務失敗",
    "\"%1$s\" task for \"%2$s\" has failed" : "「%2$s」的「%1$s」任務失敗",
    "View task" : "檢視任務",
    "AI image generation" : "AI 影像產生",
    "No text to image processing provider available" : "無可用的文字轉影像處理提供者",
    "Image request error" : "影像請求錯誤",
    "View" : "檢視",
    "Image generation not found." : "找不到影像產生。",
    "Image generation failed." : "影像產生失敗。",
    "Image file names could not be fetched from database" : "無法從資料庫擷取影像檔案名稱",
    "Image file not found in database" : "資料庫中找不到影像檔案",
    "Image file not found" : "找不到影像檔案",
    "Artificial Intelligence" : "人工智慧",
    "Process and transform text" : "處理與轉換文字",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch text processing tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\n### How to use it\n\nA new right header  menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input text you want to process.\n\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\n### Text processing providers\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your text processing tasks.\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)" : "此應用程式帶來了一個使用 Nextcloud 文字處理功能的使用者介面。\n\n其讓使用者可以啟動文字處理任務，在任務完成時收到通知並檢視結果。\n小幫手也會出現在「文字」等其他應用程式中，可以輕鬆處理文件的某些部分。\n\n### 如何使用它\n\n出現新的右標題選單條目。點擊後，將顯示小幫手，您可以選擇任務類型與\n設定要處理的輸入文字。\n\n規劃好任務後，其將作為背景作業執行。完成後，您將會收到其中顯示結果的通知。\n\n其他應用程式可以與小幫手應用程式整合。例如，文字將在每個段落旁邊顯示一個行內按鈕，直接選擇一個任務類型來處理該段落。以這種方式選擇任務將會開啟包含該任務的助手，且預先選擇並設定輸入文字。\n\n### 文字處理提供者\n\n在小幫手中，可用任務清單取決於透過其他應用程式安裝的可用提供者。\n這代表了您可以完全自由地決定哪些服務/軟體實際執行您的文字處理任務。\n到目前為止，[大型語言模型](https://github.com/nextcloud/llm#readme)以及 [OpenAi/LocalAI 整合](https://apps.nextcloud.com/apps/integration_openai) 應用程式包含了文字處理提供者：\n* 總結\n* 擷取主題\n* 產生標題\n* 從免費提示中取得答案\n* 重新表述（僅限 OpenAI/LocalAI）",
    "Select which features you want to enable" : "選取要啟用的功能",
    "Top-right assistant" : "右上角的小幫手",
    "Assistant admin options saved" : "已儲存小幫手管理選項",
    "Failed to save assistant admin options" : "儲存小幫手管理選項失敗",
    "Input" : "輸入",
    "Type some text" : "輸入一些文字",
    "Result" : "結果",
    "This output was generated by AI. Make sure to double-check and adjust." : "此輸出是由人工智慧產生的。請務必仔細檢查與調整。",
    "Run an assistant task" : "執行小幫手任務",
    "Run" : "執行",
    "Schedule an assistant task" : "安排小幫手任務",
    "Schedule" : "安排",
    "Copy task output" : "複製任務輸出",
    "Copy" : "複製",
    "Try again" : "再試試",
    "Send request" : "傳送請求",
    "Result could not be copied to clipboard" : "結果無法複製到剪貼簿",
    "Close" : "關閉",
    "Close Nextcloud Assistant" : "關閉 Nextcloud 小幫手",
    "Assistant options saved" : "已儲存小幫手選項",
    "Failed to save assistant options" : "儲存小幫手選項失敗",
    "Getting results…" : "正在取得結果……",
    "Run in the background" : "背景執行",
    "You will receive a notification when it has finished" : "完成後，您將會收到通知",
    "Your task has been scheduled" : "您的任務已排程",
    "Image generation" : "影像產生",
    "Edit visible images" : "編輯可見的影像",
    "Click to toggle generation visibility" : "點擊切換產生能見度",
    "Generated image" : "已產生影像",
    "This generation has no visible images" : "這次產生沒有可見的影像",
    "Estimated generation time left: " : "預計剩餘產生時間：",
    "The generated image is shown once ready." : "一旦準備好，就會顯示產生的影像。",
    "Image generation failed" : "影像產生失敗",
    "Unexpected server response" : "未預期的伺服器回應",
    "Rate limit reached. Please try again later." : "已達速率限制。請稍後再試。",
    "Unknown server query error" : "未知的伺服器查詢錯誤",
    "Failed to schedule your task" : "無法安排您的任務",
    "AI Image Generation" : "人工智慧影像產生",
    "Preview" : "預覽",
    "Show/hide advanced options" : "顯示/隱藏進階選項",
    "Advanced options" : "進階選項",
    "Preview image generation by AI" : "預覽人工智慧影像產生",
    "Notify when ready" : "準備好時通知",
    "Submit image(s) generated by AI" : "遞交由人工智慧產生的影像",
    "Send" : "傳送",
    "Include the prompt in the result" : "在結果中包含提示詞",
    "Number of results" : "結果數量",
    "Regenerate" : "重新產生",
    "Image generation cancel error" : "影像產生取消錯誤",
    "Unknown image generation cancel error" : "未知的影像產生取消錯誤",
    "Unexpected response from server." : "來自伺服器的非預期回應。",
    "Image generation error" : "影像產生錯誤",
    "Unknown image generation error" : "未知的產生影像錯誤",
    "You will be notified when the image generation is ready." : "影像產生就緒時將會通知您。",
    "Notify when ready error" : "就緒時通知錯誤",
    "Unknown notify when ready error" : "未知的就緒時通知錯誤",
    "Copy link to clipboard" : "複製連結到剪貼簿",
    "This task does not exist or has been cleaned up" : "此任務不存在或已被清除",
    "Failed to schedule the task" : "安排任務失敗"
},
"nplurals=1; plural=0;");
