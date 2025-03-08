OC.L10N.register(
    "assistant",
    {
    "Failed to notify when ready; unknown user" : "تەييار بولغاندا ئۇقتۇرۇش قىلالمىدى نامەلۇم ئىشلەتكۈچى",
    "Send an email" : "ئېلېكترونلۇق خەت ئەۋەتىڭ",
    "User not logged in" : "ئىشلەتكۈچى تىزىمغا كىرمىدى",
    "User not found" : "ئىشلەتكۈچى تېپىلمىدى",
    "Failed to create a chat session" : "پاراڭلىشىش يىغىنى قۇرالمىدى",
    "Failed to update the chat session" : "پاراڭلىشىش يىغىنىنى يېڭىلاش مەغلۇب بولدى",
    "Failed to delete the chat session" : "پاراڭلىشىش يىغىنىنى ئۆچۈرەلمىدى",
    "Failed to get chat sessions" : "پاراڭلىشىش يىغىنىغا ئېرىشەلمىدى",
    "Session not found" : "يىغىن تېپىلمىدى",
    "Message content is empty" : "ئۇچۇر مەزمۇنى قۇرۇق",
    "Failed to add a chat message" : "پاراڭلىشىش ئۇچۇرى قوشۇلمىدى",
    "Failed to get chat messages" : "پاراڭلىشىش ئۇچۇرىغا ئېرىشەلمىدى",
    "Failed to delete a chat message" : "پاراڭلىشىش ئۇچۇرىنى ئۆچۈرەلمىدى",
    "Failed to delete the last message" : "ئاخىرقى ئۇچۇرنى ئۆچۈرەلمىدى",
    "Failed to add a chat message into DB" : "DB غا پاراڭلىشىش ئۇچۇرى قوشالمىدى",
    "Failed to generate a title for the chat session" : "پاراڭلىشىش ئۈچۈن تېما ھاسىل قىلالمىدى",
    "Nextcloud Assistant" : "Nextcloud ياردەمچىسى",
    "Assistant task" : "ياردەمچى ۋەزىپە",
    "AI text generation" : "AI تېكىست ئەۋلاد",
    "AI image generation" : "AI رەسىم ھاسىل قىلىش",
    "AI audio transcription" : "AI ئاۋاز خاتىرىلەش",
    "AI context writer" : "AI مەزمۇن يازغۇچىسى",
    "Writing style: %1$s; Source material: %2$s" : "يېزىش ئۇسلۇبى:%1 $ s; مەنبە ماتېرىيالى:%2 $ s",
    "Task for \"%1$s\" has finished" : "«%1 $ s» نىڭ ۋەزىپىسى تاماملاندى",
    "\"%1$s\" task for \"%2$s\" has finished" : "\"%2 $ s\" نىڭ \"%1 $ s\" ۋەزىپىسى تاماملاندى",
    "Input: %1$s" : "كىرگۈزۈش:%1 $ s",
    "Result: %1$s" : "نەتىجىسى:%1 $ s",
    "View results" : "نەتىجىنى كۆرۈش",
    "Task for \"%1$s\" has failed" : "\"%1 $ s\" نىڭ ۋەزىپىسى مەغلۇپ بولدى",
    "\"%1$s\" task for \"%2$s\" has failed" : "\"%2 $ s\" نىڭ \"%1 $ s\" ۋەزىپىسى مەغلۇپ بولدى",
    "View task" : "ۋەزىپىنى كۆرۈش",
    "Chat with AI" : "AI بىلەن پاراڭ",
    "Chat with an AI model." : "AI مودېلى بىلەن پاراڭ.",
    "Generate text" : "تېكىست ھاسىل قىلىڭ",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "ياردەمچىگە تەلەپ ئەۋەتىڭ ، مەسىلەن: تونۇشتۇرۇشنىڭ بىرىنچى لايىھىسىنى يېزىڭ ، ماڭا تونۇشتۇرۇش ئۈچۈن تەكلىپ بېرىڭ ، خىزمەتدىشىمغا جاۋاب لايىھىسىنى يېزىڭ.",
    "Artificial Intelligence" : "سۈنئىي ئىدراك",
    "Process and transform text" : "تېكىستنى بىر تەرەپ قىلىش ۋە ئۆزگەرتىش",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Local Large language model](https://github.com/nextcloud/llm2#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\nMore details on how to set this up in the [admin docs](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)" : "بۇ ئەپ Nextcloud تېكىست بىر تەرەپ قىلىش ئىقتىدارىنى ئىشلىتىش ئۈچۈن ئىشلەتكۈچى كۆرۈنمە يۈزى ئېلىپ كېلىدۇ.\n\nئۇ ئابونتلارنىڭ سۈنئىي ئەقىل ۋەزىپىلىرىنى قوزغىتىشىغا ، تاماملىغاندىن كېيىن ئۇقتۇرۇشىغا ۋە نەتىجىسىنى كۆرۈشىگە يول قويىدۇ.\nياردەمچى يەنە تېكىستكە ئوخشاش ئەپلەردە ھۆججەتنىڭ قىسمەن بۆلەكلىرىنى ئاسانلا بىر تەرەپ قىلىدۇ.\n\nياردەمچى OCS API ۋە ئالدى تەرەپ بىرلەشتۈرۈش مۇمكىنچىلىكى توغرىسىدىكى تېخىمۇ كۆپ تەپسىلاتلار\n[ئاچقۇچى doc] (https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### ئۇنى قانداق ئىشلىتىش\n\nيېڭى ئوڭ باش تىزىملىك تىزىملىكى كۆرۈنىدۇ. چەككەندىن كېيىن ياردەمچى كۆرسىتىلىدۇ ، سىز ۋەزىپە تۈرىنى تاللىسىڭىز بولىدۇ\nبىر تەرەپ قىلماقچى بولغان كىرگۈزۈشنى تەڭشەڭ.\n\nAI تەمىنلىگۈچى تەمىنلىگەن ۋاقىت مۆلچەرىگە ئاساسەن بۇ ۋەزىپە دەرھال ئىجرا قىلىنىشى ياكى پىلانلىنىشى مۇمكىن.\nبىر ۋەزىپە ئورۇنلاشتۇرۇلغاندىن كېيىن ، ئۇ ئارقا خىزمەت سۈپىتىدە ئىجرا بولىدۇ. ئۇ تاماملانغاندىن كېيىن ، ئۇقتۇرۇش تاپشۇرۇۋالىسىز\nبۇنىڭدىن نەتىجىنى كۆرسەتكىلى بولىدۇ.\n\nباشقا ئەپلەر ياردەمچى بىلەن بىرلەشتۈرەلەيدۇ. مەسىلەن ، تېكىست ھەر بىر ئابزاستىن باشقا بىر قۇر كۇنۇپكىنى كۆرسىتىدۇ\nبۇ ئابزاسنى بىر تەرەپ قىلىدىغان ۋەزىپە تۈرىنى بىۋاسىتە تاللاش. بۇ خىل ۋەزىپىنى تاللىغاندا ياردەمچى ۋەزىپە بىلەن ئېچىلىدۇ\nئالدىن تاللانغان ۋە كىرگۈزۈلگەن تېكىست توپلىمى.\n\n[ئىشلەتكۈچى doc] دىكى تېخىمۇ كۆپ تەپسىلاتلار ۋە ئېكران كۆرۈنۈشلىرى (https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## ئىقتىدارلىرى\n\nياردەمچىدە ، بار بولغان ۋەزىپە تىزىملىكى باشقا ئەپلەر ئارقىلىق قاچىلانغان تەمىنلىگۈچىلەرگە باغلىق.\nبۇ سىزنىڭ قايسى مۇلازىمەت / يۇمشاق دېتالنىڭ سۈنئىي ئەقىل ۋەزىپىسىنى ئىجرا قىلىدىغانلىقىغا تولۇق ئەركىنلىكىڭىز بارلىقىنى بىلدۈرىدۇ.\n\n### تېكىست بىر تەرەپ قىلغۇچ\n\nھازىرغا قەدەر ، [يەرلىك چوڭ تىل مودېلى] (https://github.com/nextcloud/llm2#readme)\nۋە [OpenAi / LocalAI بىرلەشتۈرۈش] (https://apps.nextcloud.com/apps/integration_openai) ئەپلىرى\nتېكىست بىر تەرەپ قىلىش تەمىنلىگۈچىلەرنى ئۆز ئىچىگە ئالىدۇ:\n* خۇلاسە\n* تېمىنى چىقىرىڭ\n* بىر تېما ھاسىل قىلىڭ\n* ھەقسىز تەكلىپتىن جاۋاب ئېلىڭ\n* ئىسلاھ قىلىش (پەقەت OpenAi / LocalAi)\n* مەزمۇن يازغۇچى: بەلگىلەنگەن ئۇسلۇب بىلەن تېكىست ھاسىل قىلىڭ. ئۇسلۇبنى مىسال تېكىستى ئارقىلىق تەسۋىرلەشكە ياكى تەمىنلەشكە بولىدۇ.\n\n### تېكىستكە رەسىم (رەسىم ھاسىل قىلىش)\n\nداڭلىق تەمىنلىگۈچىلەر:\n* [OpenAi / LocalAI بىرلەشتۈرۈش] (https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion] (https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### تېكىستكە سۆزلەش (ئاۋازلىق ترانسكرىپسىيە)\n\nداڭلىق تەمىنلىگۈچىلەر:\n* [OpenAi / LocalAI بىرلەشتۈرۈش] (https://apps.nextcloud.com/apps/integration_openai)\n* [يەرلىك پىچىرلاش نۇتۇق-تېكىست] (https://apps.nextcloud.com/apps/stt_whisper)\n\nبۇنى [admin docs] دا قانداق تەڭشەش توغرىسىدا تېخىمۇ كۆپ تەپسىلاتلار (https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)",
    "Assistant admin options saved" : "ياردەمچى باشقۇرغۇچى تاللانمىلىرى ساقلاندى",
    "Failed to save assistant admin options" : "ياردەمچى باشقۇرغۇچى تاللانمىلىرىنى ساقلىيالمىدى",
    "Find more details on how to set up Assistant and recommended backends in the Administration documentation." : "ياردەمچى ۋە تەۋسىيە قىلىنغان ئارقا بەتلەرنى باشقۇرۇش ھۆججىتىدىن قانداق تەڭشەش توغرىسىدا تېخىمۇ كۆپ تەپسىلاتلارنى تېپىڭ.",
    "Select which features you want to enable" : "قايسى ئىقتىدارلارنى قوزغىتىشنى تاللاڭ",
    "Top-right assistant" : "ئوڭدىن ئوڭ ياردەمچى",
    "AI text generation smart picker" : "AI تېكىست ئەۋلاد ئەقلىي ئىقتىدارلىق تاللىغۇچ",
    "Text-to-image smart picker" : "تېكىستتىن رەسىمگە ئەقلىي ئىقتىدارلىق تاللىغۇچ",
    "To enable this feature, please install a text-to-image provider:" : "بۇ ئىقتىدارنى قوزغىتىش ئۈچۈن تېكىستتىن رەسىمگە تەمىنلىگۈچىنى قاچىلاڭ:",
    "Speech-to-text smart picker" : "سۆزدىن تېكىستكە ئەقلىي ئىقتىدارلىق تاللىغۇچ",
    "To enable this feature, please install a speech-to-text provider:" : "بۇ ئىقتىدارنى قوزغىتىش ئۈچۈن ، تېكىستتىن تېكىست تەمىنلىگۈچىنى قاچىلاڭ:",
    "Chat User Instructions for Chat Completions" : "پاراڭلىشىش ئۈچۈن پاراڭ ئىشلەتكۈچى قوللانمىسى",
    "It is passed on to the LLM for it to better understand the context." : "ئۇ مەزمۇننى تېخىمۇ ياخشى چۈشىنىش ئۈچۈن LLM غا يەتكۈزۈلدى.",
    "\"{user}\" is a placeholder for the user's display name." : "\"{user}\" ئىشلەتكۈچىنىڭ كۆرسىتىش نامىنىڭ ئورۇن ئىگىسى.",
    "Chat User Instructions for Title Generation" : "تېما ھاسىل قىلىش قوللانمىسى قوللانمىسى",
    "It is passed on to the LLMs to let it know what to do" : "ئۇ نېمە قىلىش كېرەكلىكىنى بىلدۈرۈش ئۈچۈن LLM غا يەتكۈزۈلدى",
    "\"{user}\" is a placeholder for the user's display name here as well." : "\"{user}\" بۇ يەردىكى ئىشلەتكۈچىنىڭ كۆرسىتىش نامىنىڭ ئورنى.",
    "Last N messages to consider for chat completions" : "پاراڭلىشىشنى تاماملاشنى ئويلىشىدىغان ئاخىرقى N ئۇچۇرلىرى",
    "This includes the user instructions and the LLM's messages" : "بۇ ئىشلەتكۈچى كۆرسەتمىسى ۋە LLM نىڭ ئۇچۇرلىرىنى ئۆز ئىچىگە ئالىدۇ",
    "Number of messages to consider for chat completions (excluding the user instructions, which is always considered)" : "پاراڭلىشىشنى تاماملاشنى ئويلىشىدىغان ئۇچۇرلارنىڭ سانى (ئىشلەتكۈچى كۆرسەتمىسى بۇنىڭ سىرتىدا)",
    "The task ran successfully but the result is identical to the input." : "ۋەزىپە مۇۋەپپەقىيەتلىك ئىجرا قىلىندى ، ئەمما نەتىجىسى كىرگۈزۈش بىلەن ئوخشاش.",
    "This output was generated by AI. Make sure to double-check and adjust." : "بۇ مەھسۇلات سۈنئىي ئەقىل تەرىپىدىن بارلىققا كەلگەن. قايتا تەكشۈرۈش ۋە تەڭشەشكە كاپالەتلىك قىلىڭ.",
    "Hide advanced options" : "ئىلغار تاللاشلارنى يوشۇرۇش",
    "Show advanced options" : "ئىلغار تاللاشلارنى كۆرسەت",
    "Try again" : "قايتا سىناڭ",
    "Send request" : "تەلەپ ئەۋەتىڭ",
    "Launch this task again" : "بۇ ۋەزىپىنى قايتا قوزغىتىڭ",
    "Launch a task" : "بىر ئىشنى باشلاڭ",
    "Generate a first draft for a blog post about privacy" : "مەخپىيەتلىك ھەققىدە بىلوگ يازمىسىنىڭ دەسلەپكى لايىھىسىنى ھاسىل قىلىڭ",
    "What is the venue for the team retreat this quarter?" : "بۇ پەسىل كوماندىنىڭ چېكىنىش مەيدانى قايسى؟",
    "Type or paste the text to summarize" : "تېكىستنى قىستۇرۇش ياكى چاپلاش",
    "Type or paste the text to generate a headline for" : "تېكستنى كىرگۈزۈپ چاپلاڭ",
    "Type or paste the text to extract the topics from" : "تېمىنى يېزىش ئۈچۈن تېكستنى كىرگۈزۈڭ ياكى چاپلاڭ",
    "landscape trees forest peaceful" : "مەنزىرە دەرەخلىرى تىنچ",
    "a number" : "بىر سان",
    "Shakespeare or an example of the style" : "شېكىسپىر ياكى ئۇسلۇبنىڭ مىسالى",
    "A description of what you need or some original content" : "سىزگە لازىملىق ياكى بەزى ئەسلى مەزمۇنلارنىڭ چۈشەندۈرۈشى",
    "Back to the assistant" : "ياردەمچىگە قايتىش",
    "Previous \"{taskTypeName}\" tasks" : "ئالدىنقى \"{taskTypeName}\" ۋەزىپىلىرى",
    "Show previous tasks" : "ئالدىنقى ۋەزىپىلەرنى كۆرسەت",
    "Close" : "ياپ",
    "Close Nextcloud Assistant" : "Nextcloud ياردەمچىسىنى تاقاڭ",
    "Less" : "ئاز",
    "More" : "تېخىمۇ كۆپ",
    "Cancel" : "بىكار قىلىش",
    "Error generating a response" : "جاۋاب ھاسىل قىلىشتا خاتالىق",
    "Error updating title of conversation" : "سۆھبەتنىڭ نامىنى يېڭىلاشتا خاتالىق",
    "Untitled conversation" : "نامسىز سۆھبەت",
    "Error generating a title for the conversation" : "سۆھبەت ئۈچۈن تېما ھاسىل قىلىشتا خاتالىق",
    "Error deleting conversation" : "سۆھبەتنى ئۆچۈرۈشتە خاتالىق",
    "Error fetching conversations" : "سۆھبەت ئېلىپ بېرىشتا خاتالىق",
    "Error deleting message" : "ئۇچۇرنى ئۆچۈرۈشتە خاتالىق",
    "Error fetching messages" : "ئۇچۇر ئېلىشتا خاتالىق",
    "Error creating a new message" : "يېڭى ئۇچۇر قۇرۇشتا خاتالىق",
    "Invalid response received for a new conversation request" : "يېڭى سۆھبەت تەلىپى ئۈچۈن قوبۇل قىلىنغان ئىناۋەتسىز جاۋاب",
    "Error creating a new conversation" : "يېڭى سۆھبەت قۇرۇشتا خاتالىق",
    "Error regenerating a response" : "جاۋابنى ئەسلىگە كەلتۈرۈشتە خاتالىق",
    "New conversation" : "يېڭى سۆھبەت",
    "Loading conversations…" : "پاراڭلارنى يۈكلەۋاتىدۇ…",
    "No conversations yet" : "تېخى سۆھبەت يوق",
    "Delete" : "ئۆچۈر",
    "Conversation title" : "سۆھبەت تېمىسى",
    "Edit title" : "ماۋزۇنى تەھرىرلەش",
    "Generate title" : "تېما ھاسىل قىلىڭ",
    "Creating a new conversation" : "يېڭى سۆھبەت قۇرۇش",
    "Hello there! What can I help you with today?" : "ياخشىمۇسىز! بۈگۈن سىزگە نېمە ياردەم بېرەلەيمەن؟",
    "Try sending a message to spark a conversation." : "پاراڭلىشىش ئۈچۈن ئۇچۇر ئەۋەتىپ بېقىڭ.",
    "Load older messages" : "كونا ئۇچۇرلارنى يۈكلەڭ",
    "Retry response generation" : "قايتا-قايتا جاۋاب قايتۇرۇش",
    "Error loading messages" : "ئۇچۇرلارنى يۈكلەشتە خاتالىق",
    "Loading messages…" : "ئۇچۇرلارنى يۈكلەۋاتىدۇ…",
    "The text must be shorter than or equal to {maxLength} characters, currently {length}" : "بۇ تېكىست چوقۇم {maxLength} ھەرپتىن قىسقا ياكى تەڭ بولۇشى كېرەك ، ھازىر {length}",
    "Cancel editing" : "تەھرىرلەشنى ئەمەلدىن قالدۇرۇڭ",
    "Submit" : "يوللاڭ",
    "Type a message…" : "ئۇچۇر كىرگۈزۈڭ…",
    "Processing…" : "بىر تەرەپ قىلىش…",
    "You" : "سەن",
    "Message copied to clipboard" : "چاپلاش تاختىسىغا كۆچۈرۈلگەن ئۇچۇر",
    "Copy message" : "ئۇچۇرنى كۆچۈرۈڭ",
    "Regenerate message" : "ئۇچۇرنى قايتا ھاسىل قىلىش",
    "Delete message" : "ئۇچۇرنى ئۆچۈرۈڭ",
    "Select Files/Folders" : "ھۆججەت / ھۆججەت قىسقۇچنى تاللاڭ",
    "Select Providers" : "تەمىنلىگۈچىلەرنى تاللاڭ",
    "Choose Files/Folders" : "ھۆججەت / ھۆججەت قىسقۇچنى تاللاڭ",
    "Choose" : "تاللاڭ",
    "Clear Selection" : "تاللاشنى تازىلاش",
    "Error fetching default provider key" : "سۈكۈتتىكى تەمىنلىگۈچى ئاچقۇچنى ئېلىشتا خاتالىق",
    "Error fetching providers" : "تەمىنلىگۈچىلەرنى ئېلىشتا خاتالىق",
    "Selective context" : "تاللاش مەزمۇنى",
    "No sources referenced" : "ھېچقانداق مەنبە پايدىلانمىدى",
    "tool" : "قورال",
    "integration" : "بىرلەشتۈرۈش",
    "complete AI documentation" : "AI ھۆججىتىنى تولۇق",
    "No provider found" : "تەمىنلىگۈچى تېپىلمىدى",
    "AI Providers need to be installed to use the Assistant" : "ياردەمچى ئىشلىتىش ئۈچۈن سۈنئىي ئەقىل تەمىنلىگۈچىلەر ئورنىتىش كېرەك",
    "Assistant options saved" : "ياردەمچى تاللانمىلىرى ساقلاندى",
    "Failed to save assistant options" : "ياردەمچى تاللاشلارنى ساقلىيالمىدى",
    "AI image generation smart picker" : "سۈنئىي ئەقىل تەسۋىر ھاسىل قىلغۇچى ئەقلىي ئىقتىدارلىق",
    "AI transcription smart picker" : "سۈنئىي ئەقىل ترانسكرىپسىيەسى ئەقلىي ئىقتىدارلىق تاللىغۇچ",
    "No suitable providers are available. They must first be enabled by your administrator." : "ماس كېلىدىغان تەمىنلىگۈچىلەر يوق. ئۇلارنى ئالدى بىلەن باشقۇرغۇچىڭىز قوزغىتىشى كېرەك.",
    "Configured Backends" : "ئارقا سەپ سەپلەنگەن",
    "The following services are used as backends for Nextcloud Assistant:" : "Nextcloud ياردەمچىسى ئۈچۈن تۆۋەندىكى مۇلازىمەتلەر ئىشلىتىلىدۇ:",
    "{providerName} for {taskName}" : "{providerName} ئۈچۈن تەمىنلىگۈچى {taskName}",
    "Getting results…" : "نەتىجىگە ئېرىشىش…",
    "Run task in the background and get notified" : "ئارقا سۇپىدا ۋەزىپە ئىجرا قىلىڭ ۋە ئۇقتۇرۇش قىلىڭ",
    "Back to the Assistant" : "ياردەمچىگە قايتىش",
    "Cancel task" : "ۋەزىپىنى بىكار قىلىش",
    "Your task has been scheduled" : "ۋەزىپىڭىز ئورۇنلاشتۇرۇلغان",
    "You will receive a notification when it has finished" : "ئۇ تاماملانغاندىن كېيىن ئۇقتۇرۇش تاپشۇرۇۋالىسىز",
    "You have not submitted any \"{taskTypeName}\" task yet" : "سىز تېخى «{taskTypeName}» ۋەزىپىسىنى تاپشۇرمىدىڭىز",
    "Nothing yet" : "تېخى ھېچ نەرسە يوق",
    "Succeeded" : "مۇۋەپپەقىيەت قازاندى",
    "Cancelled" : "ئەمەلدىن قالدۇرۇلدى",
    "Failed" : "مەغلۇب بولدى",
    "Running" : "ئىجرا بولۇۋاتىدۇ",
    "Scheduled" : "پىلانلانغان",
    "Input" : "كىرگۈزۈش",
    "Result" : "نەتىجىدە",
    "This task is scheduled" : "بۇ ۋەزىپە ئورۇنلاشتۇرۇلغان",
    "Unknown status" : "نامەلۇم ھالەت",
    "Error while recording audio" : "ئاۋاز خاتىرىلەۋاتقاندا خاتالىق",
    "Start recording" : "خاتىرىلەشنى باشلاڭ",
    "Dismiss recording" : "خاتىرىسىنى ئەمەلدىن قالدۇرۇش",
    "End recording and send" : "خاتىرىلەشنى ئاخىرلاشتۇرۇڭ",
    "Choose file" : "ھۆججەت تاللاڭ",
    "Choose a file" : "ھۆججەت تاللاڭ",
    "No file selected" : "ھۆججەت تاللانمىدى",
    "Choose a value" : "قىممەت تاللاڭ",
    "Could not upload the recorded file" : "خاتىرىلەنگەن ھۆججەتنى يۈكلىيەلمىدى",
    "Output file share link copied to clipboard" : "قىستۇرما ھۆججەتكە كۆچۈرۈلگەن ھۆججەت ئورتاقلىشىش ئۇلىنىشى",
    "Could not copy to clipboard" : "چاپلاش تاختىسىغا كۆچۈرگىلى بولمايدۇ",
    "Upload from device" : "ئۈسكۈنىدىن يۈكلەش",
    "Select from Nextcloud" : "Nextcloud دىن تاللاڭ",
    "Pick one or multiple files" : "بىر ياكى بىر قانچە ھۆججەتنى تاللاڭ",
    "Remove this media" : "بۇ مېدىيانى ئۆچۈرۈڭ",
    "Download this media" : "بۇ مېدىيانى چۈشۈرۈڭ",
    "Share this media" : "بۇ مېدىيانى ھەمبەھىرلەڭ",
    "Share" : "ھەمبەھىرلەش",
    "Pick a file" : "ھۆججەت تاللاڭ",
    "Clear value" : "ئېنىق قىممەت",
    "Type some number" : "بىر قانچە ساننى كىرگۈزۈڭ",
    "The current value is not a number" : "ھازىرقى قىممىتى سان ئەمەس",
    "Advanced" : "ئالىي",
    "Choose a text file" : "تېكىست ھۆججىتىنى تاللاڭ",
    "Unexpected response from text parser" : "تېكىست ئانالىزچىنىڭ كۈتۈلمىگەن ئىنكاسى",
    "Could not parse file" : "ھۆججەتنى تەھلىل قىلالمىدى",
    "Result could not be copied to clipboard" : "نەتىجىنى چاپلاش تاختىسىغا كۆچۈرگىلى بولمىدى",
    "Copy output" : "كۆچۈرۈش",
    "Copy" : "كۆچۈرۈڭ",
    "Upload file" : "ھۆججەت يۈكلەڭ",
    "Could not upload the file" : "ھۆججەتنى يۈكلىيەلمىدى",
    "Could not upload the files" : "ھۆججەتلەرنى يۈكلىيەلمىدى",
    "Your task with ID {id} has failed" : "ID {id} بىلەن بولغان ۋەزىپىڭىز مەغلۇپ بولدى",
    "Failed to schedule your task" : "ۋەزىپىڭىزنى ئورۇندىيالمىدى",
    "Submit the current task's result" : "نۆۋەتتىكى ۋەزىپە نەتىجىسىنى يوللاڭ",
    "Assistant error" : "ياردەمچى خاتالىق",
    "Please log in to view the task result" : "ۋەزىپە نەتىجىسىنى كۆرۈش ئۈچۈن كىرىڭ",
    "This task does not exist or has been cleaned up" : "بۇ ۋەزىپە مەۋجۇت ئەمەس ياكى تازىلاندى",
    "Failed to schedule the task" : "ۋەزىپىنى ئورۇندىيالمىدى",
    "Failed to get the last message" : "ئاخىرقى ئۇچۇرغا ئېرىشەلمىدى",
    "Failed to process prompt; unknown user" : "بىر تەرەپ قىلىش مەغلۇب بولدى نامەلۇم ئىشلەتكۈچى",
    "Failed to get prompt history; unknown user" : "تېز تارىخقا ئېرىشەلمىدى نامەلۇم ئىشلەتكۈچى",
    "Failed to get outputs; unknown user" : "نەتىجىگە ئېرىشەلمىدى نامەلۇم ئىشلەتكۈچى",
    "Failed to cancel generation; unknown user" : "ئەۋلادنى ئەمەلدىن قالدۇرمىدى نامەلۇم ئىشلەتكۈچى",
    "Some internal error occurred. Contact your sysadmin for more info." : "بەزى ئىچكى خاتالىق يۈز بەردى. تېخىمۇ كۆپ ئۇچۇرغا ئېرىشىش ئۈچۈن sysadmin بىلەن ئالاقىلىشىڭ.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Speech-to-Text تەمىنلىگۈچى تېپىلمىدى ، بۇ ئىقتىدارنى ئىشلىتىش ئۈچۈن ئەپ دۇكىنىدىن بىرنى قاچىلاڭ.",
    "Audio file not found." : "ئاۋاز ھۆججىتى تېپىلمىدى.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "خاتىرىلەش ھۆججىتى / مۇندەرىجىسى قۇرۇشقا ئىجازەت يوق ، sysadmin بىلەن ئالاقىلىشىپ بۇ مەسىلىنى ھەل قىلىڭ.",
    "Failed to set visibility of image files; unknown user" : "رەسىم ھۆججىتىنىڭ كۆرۈنۈشچانلىقىنى بەلگىلىيەلمىدى نامەلۇم ئىشلەتكۈچى",
    "Unknown error while retrieving prompt history." : "تېز تارىخقا ئېرىشىش جەريانىدا نامەلۇم خاتالىق.",
    "Context write" : "مەزمۇن يېزىش",
    "Writes text in a given style based on the provided source material." : "تەمىنلەنگەن مەنبە ماتېرىيالىغا ئاساسەن بېرىلگەن ئۇسلۇبتا تېكىست يازىدۇ.",
    "Transcribe" : "Transcript",
    "Transcribe audio to text" : "ئاۋازنى تېكىستكە كۆچۈرۈڭ",
    "Generate image" : "رەسىم ھاسىل قىلىش",
    "Generate an image from a text" : "تېكىستتىن رەسىم ھاسىل قىلىڭ",
    "Canceled by user" : "ئىشلەتكۈچى تەرىپىدىن ئەمەلدىن قالدۇرۇلدى",
    "FreePromptTaskType not available" : "FreePromptTaskType نى ئىشلەتكىلى بولمايدۇ",
    "Failed to run or schedule a task" : "بىر ئىشنى ئىجرا قىلالمىدى ياكى ئورۇنلاشتۇرمىدى",
    "Failed to get prompt history" : "تېز تارىخقا ئېرىشەلمىدى",
    "Generation not found" : "ئەۋلاد تېپىلمىدى",
    "Multiple tasks found" : "كۆپ ۋەزىپە تېپىلدى",
    "Transcript not found" : "خاتىرىسى تېپىلمىدى",
    "No text to image processing provider available" : "رەسىم بىر تەرەپ قىلغۇچىغا تېكىست يوق",
    "Image request error" : "رەسىم تەلەپ قىلىش خاتالىقى",
    "Image generation not found." : "رەسىم ھاسىل قىلىنمىدى.",
    "Retrieving the image generation failed." : "رەسىم ھاسىل قىلىش مەغلۇب بولدى.",
    "Image generation failed." : "رەسىم ھاسىل قىلىش مەغلۇب بولدى.",
    "Image file names could not be fetched from database" : "رەسىم ھۆججىتىنىڭ ئىسمىنى سانداندىن تاپقىلى بولمايدۇ",
    "Image file not found in database" : "سانداندا رەسىم ھۆججىتى تېپىلمىدى",
    "Image file not found" : "رەسىم ھۆججىتى تېپىلمىدى",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "بۇ ئەپ Nextcloud تېكىست بىر تەرەپ قىلىش ئىقتىدارىنى ئىشلىتىش ئۈچۈن ئىشلەتكۈچى كۆرۈنمە يۈزى ئېلىپ كېلىدۇ.\n\nئۇ ئابونتلارنىڭ سۈنئىي ئەقىل ۋەزىپىلىرىنى قوزغىتىشىغا ، تاماملىغاندىن كېيىن ئۇقتۇرۇشىغا ۋە نەتىجىسىنى كۆرۈشىگە يول قويىدۇ.\nياردەمچى يەنە تېكىستكە ئوخشاش ئەپلەردە ھۆججەتنىڭ قىسمەن بۆلەكلىرىنى ئاسانلا بىر تەرەپ قىلىدۇ.\n\nياردەمچى OCS API ۋە ئالدى تەرەپ بىرلەشتۈرۈش مۇمكىنچىلىكى توغرىسىدىكى تېخىمۇ كۆپ تەپسىلاتلار\n[ئاچقۇچى doc] (https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### ئۇنى قانداق ئىشلىتىش\n\nيېڭى ئوڭ باش تىزىملىك تىزىملىكى كۆرۈنىدۇ. چەككەندىن كېيىن ياردەمچى كۆرسىتىلىدۇ ، سىز ۋەزىپە تۈرىنى تاللىسىڭىز بولىدۇ\nبىر تەرەپ قىلماقچى بولغان كىرگۈزۈشنى تەڭشەڭ.\n\nAI تەمىنلىگۈچى تەمىنلىگەن ۋاقىت مۆلچەرىگە ئاساسەن بۇ ۋەزىپە دەرھال ئىجرا قىلىنىشى ياكى پىلانلىنىشى مۇمكىن.\nبىر ۋەزىپە ئورۇنلاشتۇرۇلغاندىن كېيىن ، ئۇ ئارقا خىزمەت سۈپىتىدە ئىجرا بولىدۇ. ئۇ تاماملانغاندىن كېيىن ، ئۇقتۇرۇش تاپشۇرۇۋالىسىز\nبۇنىڭدىن نەتىجىنى كۆرسەتكىلى بولىدۇ.\n\nباشقا ئەپلەر ياردەمچى بىلەن بىرلەشتۈرەلەيدۇ. مەسىلەن ، تېكىست ھەر بىر ئابزاستىن باشقا بىر قۇر كۇنۇپكىنى كۆرسىتىدۇ\nبۇ ئابزاسنى بىر تەرەپ قىلىدىغان ۋەزىپە تۈرىنى بىۋاسىتە تاللاش. بۇ خىل ۋەزىپىنى تاللاش ياردەمچى بىلەن ۋەزىپە بىلەن ئېچىلىدۇ\nئالدىن تاللانغان ۋە كىرگۈزۈلگەن تېكىست توپلىمى.\n\n[ئىشلەتكۈچى doc] دىكى تېخىمۇ كۆپ تەپسىلاتلار ۋە ئېكران كۆرۈنۈشلىرى (https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## ئىقتىدارلىرى\n\nياردەمچىدە ، بار بولغان ۋەزىپە تىزىملىكى باشقا ئەپلەر ئارقىلىق قاچىلانغان تەمىنلىگۈچىلەرگە باغلىق.\nبۇ سىزنىڭ قايسى مۇلازىمەت / يۇمشاق دېتالنىڭ سۈنئىي ئەقىل ۋەزىپىسىنى ئىجرا قىلىدىغانلىقىغا تولۇق ئەركىنلىكىڭىز بارلىقىنى بىلدۈرىدۇ.\n\n### تېكىست بىر تەرەپ قىلغۇچ\n\nھازىرغا قەدەر ، [چوڭ تىل مودېلى] (https://github.com/nextcloud/llm#readme)\nۋە [OpenAi / LocalAI بىرلەشتۈرۈش] (https://apps.nextcloud.com/apps/integration_openai) ئەپلىرى\nتېكىست بىر تەرەپ قىلىش تەمىنلىگۈچىلەرنى ئۆز ئىچىگە ئالىدۇ:\n* خۇلاسە\n* تېمىنى چىقىرىڭ\n* بىر تېما ھاسىل قىلىڭ\n* ھەقسىز تەكلىپتىن جاۋاب ئېلىڭ\n* ئىسلاھ قىلىش (پەقەت OpenAi / LocalAi)\n* مەزمۇن يازغۇچى: بەلگىلەنگەن ئۇسلۇب بىلەن تېكىست ھاسىل قىلىڭ. ئۇسلۇبنى مىسال تېكىستى ئارقىلىق تەسۋىرلەشكە ياكى تەمىنلەشكە بولىدۇ.\n\n### تېكىستكە رەسىم (رەسىم ھاسىل قىلىش)\n\nداڭلىق تەمىنلىگۈچىلەر:\n* [OpenAi / LocalAI بىرلەشتۈرۈش] (https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion] (https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### تېكىستكە سۆزلەش (ئاۋازلىق ترانسكرىپسىيە)\n\nداڭلىق تەمىنلىگۈچىلەر:\n* [OpenAi / LocalAI بىرلەشتۈرۈش] (https://apps.nextcloud.com/apps/integration_openai)\n* [يەرلىك پىچىرلاش نۇتقى-تېكىست] (https://apps.nextcloud.com/apps/stt_whisper)",
    "To be able to use this feature, please install at least one AI text processing provider." : "بۇ ئىقتىدارنى ئىشلىتىش ئۈچۈن كەم دېگەندە بىر AI تېكىست بىر تەرەپ قىلغۇچ تەمىنلىگۈچىنى قاچىلاڭ.",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "بۇ ئىقتىدارنى قوزغىتىش ئۈچۈن ھەقسىز تېز ۋەزىپە تىپى ئۈچۈن AI تېكىست بىر تەرەپ قىلغۇچ تەمىنلىگۈچىنى قاچىلاڭ.",
    "To enable this feature, please install a text-to-image provider." : "بۇ ئىقتىدارنى قوزغىتىش ئۈچۈن تېكىستتىن رەسىم تەمىنلىگۈچىنى قاچىلاڭ.",
    "To enable this feature, please install a speech-to-text provider." : "بۇ ئىقتىدارنى قوزغىتىش ئۈچۈن سۆز-تېكىست تەمىنلىگۈچىنى قاچىلاڭ.",
    "Image storage" : "رەسىم ساقلاش",
    "Image generation idle time (days)" : "رەسىم ھاسىل قىلىش بىكار ۋاقتى (كۈن)",
    "Days until generated images are deleted if they are not viewed" : "ھاسىل قىلىنغان رەسىملەر كۆرۈلمىگۈچە ئۆچۈرۈلىدۇ",
    " This includes the user instructions and the LLM's messages" : " بۇ ئىشلەتكۈچى كۆرسەتمىسى ۋە LLM نىڭ ئۇچۇرلىرىنى ئۆز ئىچىگە ئالىدۇ",
    "Writing style" : "يېزىش ئۇسلۇبى",
    "Describe the writing style you want to use or supply an example document." : "ئىشلەتمەكچى ياكى مىسال ھۆججىتى بىلەن تەمىنلىمەكچى بولغان يېزىقچىلىق ئۇسلۇبىنى تەسۋىرلەڭ.",
    "Source material" : "مەنبە ماتېرىيالى",
    "Describe what you want the document to be written on." : "ھۆججەتنىڭ نېمىگە يېزىلغانلىقىنى تەسۋىرلەڭ.",
    "Type some text" : "بەزى تېكىستلەرنى كىرگۈزۈڭ",
    "Text Generation" : "Text Generation",
    "Audio transcription" : "Audio transcription",
    "Unknown Result Type" : "نامەلۇم نەتىجە تىپى",
    "Output" : "چىقىرىش",
    "Copy output text to clipboard" : "چىقىرىش تېكىستىنى چاپلاش تاختىسىغا كۆچۈرۈڭ",
    "Reset the output value to the originally generated one" : "چىقىرىش قىممىتىنى ئەسلى ھاسىل قىلغان قىممەتكە قايتۇرۇڭ",
    "Reset" : "ئەسلىگە قايتۇرۇش",
    "The task ran successfully but the generated text is empty." : "ۋەزىپە مۇۋەپپەقىيەتلىك ئىجرا بولدى ، ئەمما ھاسىل قىلىنغان تېكىست قۇرۇق.",
    "Run a task" : "بىر ۋەزىپىنى ئىجرا قىلىڭ",
    "Loading conversations..." : "پاراڭلارنى يۈكلەۋاتىدۇ ...",
    "Edit Title" : "ماۋزۇنى تەھرىرلەش",
    "Generate Title" : "ماۋزۇ ھاسىل قىلىڭ",
    "Loading messages..." : "ئۇچۇرلارنى يۈكلەۋاتىدۇ ...",
    "Type a message..." : "ئۇچۇر يېزىڭ ...",
    "Thinking..." : "تەپەككۇر ...",
    "Unexpected server response" : "كۈتۈلمىگەن مۇلازىمېتىر ئىنكاسى",
    "The processing of generations failed." : "ئەۋلادلارنى بىر تەرەپ قىلىش مەغلۇب بولدى.",
    "The processing of some generations failed." : "بەزى ئەۋلادلارنى بىر تەرەپ قىلىش مەغلۇب بولدى.",
    "Text generation error" : "تېكىست ھاسىل قىلىش خاتالىقى",
    "Unknown text generation API error" : "نامەلۇم تېكىست ئەۋلاد API خاتالىقى",
    "Prompt" : "تېز",
    "Result {index}" : "نەتىجە {index}",
    "Text generation content" : "تېكىست ھاسىل قىلىش مەزمۇنى",
    "The text generation task was scheduled to run in the background." : "تېكىست ھاسىل قىلىش ۋەزىپىسى ئارقا سۇپىدا ئىجرا قىلىنىش پىلانلانغان.",
    "Estimated completion time: " : "مۆلچەردىكى تاماملىنىش ۋاقتى: ",
    "This can take a while…" : "بۇنىڭغا بىر ئاز ۋاقىت كېتىشى مۇمكىن…",
    "Some generations are still being processed in the background! Showing finished generations." : "بەزى ئەۋلادلار يەنىلا ئارقا كۆرۈنۈشتە بىر تەرەپ قىلىنىۋاتىدۇ! تەييار ئەۋلادلارنى كۆرسىتىش.",
    "Loading generations…" : "ئەۋلادلارنى يۈكلەۋاتىدۇ…",
    "Include prompt in the final result" : "ئاخىرقى نەتىجىگە تېزلىك قوشۇڭ",
    "Run in the background" : "ئارقا سۇپىدا ئىجرا قىلىڭ",
    "Choose Audio File" : "ئاۋاز ھۆججىتىنى تاللاڭ",
    "Record Audio" : "Audio Audio",
    "Reset recorded audio" : "خاتىرىلەنگەن ئاۋازنى ئەسلىگە كەلتۈرۈش",
    "Stop recording" : "خاتىرىلەشنى توختىتىڭ",
    "No audio file selected" : "ھېچقانداق ئاۋاز ھۆججىتى تاللانمىدى",
    "Selected Audio File:" : "تاللانغان ئاۋاز ھۆججىتى:",
    "Choose audio file in your storage" : "ئامبىرىڭىزدىكى ئاۋاز ھۆججىتىنى تاللاڭ",
    "Choose audio File" : "ئاۋازلىق ھۆججەتنى تاللاڭ",
    "Audio input" : "ئاۋاز كىرگۈزۈش",
    "Unknown input" : "نامەلۇم كىرگۈزۈش",
    "Running…" : "ئىجرا…",
    "Unknown error" : "يوچۇن خاتالىق",
    "Task result was copied to clipboard" : "ۋەزىپە نەتىجىسى چاپلاش تاختىسىغا كۆچۈرۈلدى",
    "Copy result" : "نەتىجىنى كۆچۈرۈڭ",
    "Image generation failed" : "رەسىم ھاسىل قىلىش مەغلۇب بولدى",
    "This generation has no visible images" : "بۇ بىر ئەۋلاد كىشىلەرنىڭ كۆرۈنمەيدىغان رەسىملىرى يوق",
    "Rate limit reached. Please try again later." : "باھا چېكىگە يەتتى. كېيىن قايتا سىناڭ.",
    "Unknown server query error" : "نامەلۇم مۇلازىمېتىر سوئال خاتالىقى",
    "Image generation" : "رەسىم ھاسىل قىلىش",
    "Edit visible images" : "كۆرۈنگەن رەسىملەرنى تەھرىرلەڭ",
    "Click to toggle generation visibility" : "ئەۋلاد كۆرۈنۈشچانلىقىنى ئۆزگەرتىش ئۈچۈن چېكىڭ",
    "Generated image" : "ھاسىل قىلىنغان رەسىم",
    "Estimated generation time left: " : "مۆلچەرلەنگەن ئەۋلاد ۋاقتى: ",
    "The image(s) will be displayed here once generated." : "رەسىم ھاسىل قىلىنغاندىن كېيىن بۇ يەردە كۆرسىتىلىدۇ.",
    "This image generation was scheduled to run in the background." : "بۇ رەسىم ھاسىل قىلىش ئارقا سۇپىدا ئىجرا قىلىنىش پىلانلانغان.",
    "Failed to get images" : "رەسىمگە ئېرىشەلمىدى",
    "Include the prompt in the result" : "نەتىجىنى تېزلىكتە ئۆز ئىچىگە ئالىدۇ",
    "Number of results" : "نەتىجە سانى",
    "Regenerate" : "قايتا ھاسىل",
    "Preview" : "ئالدىن كۆرۈش",
    "Enter your question or task here:" : "سوئالىڭىزنى ياكى ۋەزىپىڭىزنى بۇ يەرگە كىرگۈزۈڭ:",
    "Preview text generation by AI" : "سۈنئىي ئەقىل ئارقىلىق تېكىست ھاسىل قىلىشنى ئالدىن كۆرۈڭ",
    "Notify when ready" : "تەييار بولغاندا خەۋەر قىلىڭ",
    "Submit text generated by AI" : "سۈنئىي ئەقىل ھاسىل قىلغان تېكىستنى يوللاڭ",
    "The task could not be found. It may have been deleted." : "ۋەزىپە تاپالمىدى. ئۇ ئۆچۈرۈلگەن بولۇشى مۇمكىن.",
    "Successfully scheduled transcription" : "مۇۋەپپەقىيەتلىك پىلانلانغان ترانسكرىپسىيە",
    "Failed to schedule transcription" : "ترانسكرىپسىيەنى ئورۇنلاشتۇرۇش مەغلۇپ بولدى",
    "Unknown API error" : "نامەلۇم API خاتالىقى",
    "Schedule Transcription" : "ۋاقىت جەدۋىلى",
    "A description of the image you want to generate" : "سىز ھاسىل قىلماقچى بولغان رەسىمنىڭ چۈشەندۈرۈشى",
    "Image generation cancel error" : "رەسىم ھاسىل قىلىش خاتالىق",
    "Unknown image generation cancel error" : "نامەلۇم رەسىم ھاسىل قىلىش خاتالىقنى ئەمەلدىن قالدۇرىدۇ",
    "Unexpected response from server." : "مۇلازىمېتىردىن كۈتۈلمىگەن جاۋاب.",
    "Image generation error" : "رەسىم ھاسىل قىلىش خاتالىقى",
    "Unknown image generation error" : "نامەلۇم رەسىم ھاسىل قىلىش خاتالىقى",
    "You will be notified when the image generation is ready." : "رەسىم ھاسىل قىلىش تەييار بولغاندا سىزگە ئۇقتۇرۇلىدۇ.",
    "Notify when ready error" : "تەييار خاتالىق بولغاندا ئۇقتۇرۇش قىلىڭ",
    "Unknown notify when ready error" : "تەييار خاتالىق كۆرۈلگەندە نامەلۇم",
    "Preview image generation by AI" : "سۈنئىي ئەقىل ئارقىلىق رەسىم ھاسىل قىلىشنى ئالدىن كۆرۈڭ",
    "Submit image(s) generated by AI" : "سۈنئىي ئەقىل ھاسىل قىلغان رەسىم (لەر) نى يوللاڭ",
    "Send" : "يوللا",
    "Show/hide advanced options" : "ئىلغار تاللاشلارنى كۆرسىتىش / يوشۇرۇش",
    "Advanced options" : "ئىلغار تاللاشلار",
    "Image link copied to clipboard" : "رەسىم ئۇلاش تاختىسى چاپلانغان",
    "Image link could not be copied to clipboard" : "رەسىم ئۇلانمىسىنى چاپلاش تاختىسىغا كۆچۈرگىلى بولمايدۇ",
    "Copy the link to this generation to clipboard" : "بۇ ئەۋلاد ئۇلىنىشنى چاپلاش تاختىسىغا كۆچۈرۈڭ",
    "Copy link to clipboard" : "ئۇلىنىشنى چاپلاش تاختىسىغا كۆچۈرۈڭ"
},
"nplurals=2; plural=(n != 1);");
