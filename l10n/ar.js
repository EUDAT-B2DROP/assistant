OC.L10N.register(
    "assistant",
    {
    "Failed to notify when ready; unknown user" : "فشل في تنبيه المستخدم عند اكتمال تجهيز نتيجة الطلب. مُستخدِم غير معروف",
    "User not logged in" : "المستخدِم لم يُسجِّل دخوله",
    "User not found" : "المستخدم غير موجود",
    "Failed to create a chat session" : "يتعذّر إنشاء جلسة دردشة",
    "Failed to update the chat session" : "يتعذّر تحديث جلسة الدردشة",
    "Failed to delete the chat session" : "يتعذّر حذف جلسة الدردشة",
    "Failed to get chat sessions" : "يتعذّر الحصول على جلسات الدردشة",
    "Session not found" : "الجلسة غير موجودة",
    "Message content is empty" : "الرسالة فارغة من المحتوى",
    "Failed to add a chat message" : "تعذّرت إضافة رسالة دردشة",
    "Failed to get chat messages" : "تعذّر الحصول على رسائل الدردشة",
    "Failed to delete a chat message" : "تعذّر حذف رسالة الدردشة",
    "Failed to delete the last message" : "تعذّر حذف آخر رسالة",
    "Failed to add a chat message into DB" : "تعذّرت إضافة رسالة الدردشة إلى قاعدة البيانات",
    "Failed to generate a title for the chat session" : "تعذّر توليد عنوان لجلسة الدردشة",
    "Nextcloud Assistant" : "مُساعِد نكست كلاود Nextcloud Assistant",
    "Assistant task" : "مهمة لتطبيق المساعد",
    "AI text generation" : "التوليد النّصي بالذكاء الاصطناعي",
    "AI image generation" : "توليد صور بالذكاء الصناعي",
    "AI audio transcription" : "الاستنساخ الصوتي بالذكاء الصناعي",
    "AI context writer" : "كاتب بحسب السياق بالذكاء الاصطناعي",
    "Writing style: %1$s; Source material: %2$s" : "أسلُوب الكتابة: %1$s; مصدر المواد: %2$s",
    "Task for \"%1$s\" has finished" : "مُهِمَّة لـ \"%1$s\" تمّ إنجازها",
    "\"%1$s\" task for \"%2$s\" has finished" : "\"%1$s\" مُهِمَة لـ \"%2$s\" تمّ إنجازها",
    "Input: %1$s" : "مُدخلات: %1$s",
    "Result: %1$s" : "النتيجة: %1$s",
    "View results" : "أظهِر النتائج",
    "Task for \"%1$s\" has failed" : "مُهِمّة لـ \"%1$s\" أخفقت",
    "\"%1$s\" task for \"%2$s\" has failed" : "\"%1$s\" مُهِمّة لـ \"%2$s\" أخفقت",
    "View task" : "أظهِر المُهِمّة",
    "Generate text" : "توليد نص",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "أرسل طلباً للمُساعد. على سبيل المثال: أُكتُب مسودة أوّلية من العرض، أعطني مقترحات للعرض، أُكتُب ردّاً أوّليّاً على زميلي.",
    "Chat with AI" : "الدردشة مع الذكاء الاصطناعي",
    "Chat with an AI model." : "الدردشة مع نموذج الذكاء الاصطناعي.",
    "Artificial Intelligence" : "الذكاء الاصطناعي",
    "Process and transform text" : "معالجة و تحويل النصوص",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Local Large language model](https://github.com/nextcloud/llm2#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\nMore details on how to set this up in the [admin docs](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)" : "يوفر هذا التطبيق واجهة لاستعمال ميزة معالجة النصوص في نكست كلاود. \n\nفهو يسمح للمستخدمين ببدء مهام الذكاء الاصطناعي، و يقوم بإعلامهم عند الانتهاء منها لرؤية النتائج. \nيظهر المساعد أيضًا في تطبيقات أخرى مثل Text لمعالجة أجزاء من المستند بسهولة. \n\nمزيد من التفاصيل حول OCS API لتطبيق المساعد وإمكانيات تكامل الواجهة الأمامية يمكن إيجادها في [دليل المطورين] (https://github.com/nextcloud/assistant/raw/main/docs/developer) \n\n### كيفية الاستخدام \n\nتظهر إدخالية جديدة في قائمة الترويسة اليمنى. بمجرد النقر عليها، يتم عرض \"المساعد\"؛ و يمكنك تحديد نوع المهمة و تعيين الإدخال الذي تريد معالجته. \nقد يتم تشغيل المهمة على الفور أو تتم جدولتها وفقًا لتقدير الوقت الذي يُقدِّره مزود الذكاء الاصطناعي. \nبمجرد جدولة المهمة، سيتم تشغيلها كمهمة خلفية. عند الانتهاء، سوف تتلقى إشعاراً و الذي يمكنك من خلاله عرض نتائج المهمة. \nيمكن للتطبيقات الأخرى التكامل مع المساعد. على سبيل المثال، سيعرض النص زرّاً مُضمَّناً بجانب كل فقرة لتحديد نوع المهمة مباشرة لمعالجة هذه الفقرة. سيؤدي تحديد مهمة بهذه الطريقة إلى فتح \"المساعد\" بالمهمة. \nمزيد من التفاصيل ولقطات الشاشة في [دليل المستخدم] (https://github.com/nextcloud/assistant/raw/main/docs/user). \n\n## ميزات \"المساعد\"  \nتعتمد قائمة المهام المتاحة على مزودي الخدمة المتاحين المثبتين عبر تطبيقات أخرى. هذا يعني أن لديك الحرية الكاملة في تحديد الخدمة أو البرنامج الذي سيقوم بالفعل بتشغيل مهام الذكاء الاصطناعي الخاصة بك. \n\n### مزودو معالجة النصوص \n\nحتى الآن يتوفر ، [النموذج اللغوي الموسع المحلي] (https://github.com/nextcloud/llm2#readme)، و [تكامل OpenAi/LocalAI] (https://apps.nextcloud.com/apps/integration_openai) \nلمعالجة النصوص من ناحية: \n* التلخيص \n* استخلاص المواضيع \n* إنشاء العناوين \n* الحصول على إجابات عن طلبات مجانية \n* إعادة صياغة النص (في OpenAi/LocalAi فقط) \n* صياغة النص بحسب السياق: إنشاء نص بأسلوب معين. يمكن إمّا وصف الأسلوب أو تقديم نص نموذج له لمحاكاته. \n\n### تحويل النص إلى صورة (توليد الصور) \n\nمزودو الخدمة المعروفين: \n* [تكامل OpenAi/LocalAI] (https://apps.nextcloud.com/apps/integration_openai) \n* [الانتشار المستقر لـ Text2Image]  (https://apps.nextcloud.com/apps/text2image_stablediffusion) \n\n### تحويل الكلام إلى نص (الاستنساخ الصوتي) \n\nمزودو الخدمة المعروفين: \n* [تكامل OpenAi/LocalAI] (https://apps.nextcloud.com/apps/integration_openai) \n* [الهامس المحلي لتحويل الكلام إلى نص] (https://apps.nextcloud.com/apps/stt_whisper) \n\nمزيد من التفاصيل حول كيفية إعداد ذلك في [دليل المشرف] (https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)",
    "Find more details on how to set up Assistant and recommended backends in the Administration documentation." : "يمكنك العثور على مزيد من التفاصيل حول كيفية إعداد المساعد والواجهات الخلفية الموصى بها في دليل المشرف.",
    "Select which features you want to enable" : "اختر الميزات التي تريد تمكينها",
    "Top-right assistant" : "المساعد في الأعلى على الجانب",
    "To be able to use this feature, please install at least one AI text processing provider." : "حتى يُمكن استعمال هذه الخاصّيّةـ قُم رجاءً بتثبيت مزود واحد على الأقل لمعالجة النصوص بالذكاء الاصطناعي.",
    "AI text generation smart picker" : "لاقط ذكي لتوليد النصوص بالذكاء الصناعي",
    "To enable this feature, please install an AI text processing provider for the free prompt task type:" : "لتمكين هذه الميزة، يرجى تثبيت مزود لمعالجة النصوص بالذكاء الاصطناعي لمهام من نوع الطلبات المجانية:",
    "Text-to-image smart picker" : "اللاقط الذكي لتحويل النص إلى صورة",
    "To enable this feature, please install a text-to-image provider:" : "لتمكين هذه الميزه، يرجى تثبيت مزود لتحويل النص إلى صورة:",
    "Speech-to-text smart picker" : "اللاقط الذكي لتحويل الكلام إلى نص",
    "To enable this feature, please install a speech-to-text provider:" : "لتمكين هذه الميزه، يرجى تثبيت مزود لتحويل الكلام إلى نص:",
    "Chat User Instructions for Chat Completions" : "تعليمات مستخدم الدردشة لإكمال الدردشة",
    "It is passed on to the LLM for it to better understand the context." : "تمّ تمريره إلى \"النموذج اللغوي الوسيع\" LLM لفهم السياق بشكل أفضل.",
    "\"{user}\" is a placeholder for the user's display name." : "\"{user}\" هو عنصر نائب لاسم العرض الخاص بالمستخدم.",
    "Chat User Instructions for Title Generation" : "تعليمات مستخدم الدردشة لإنشاء العنوان",
    "It is passed on to the LLMs to let it know what to do" : "تمّ تمريره إلى \"النماذج اللغوية الوسيعة\" LLMs لإعلامه بما يجب عليه فعله",
    "\"{user}\" is a placeholder for the user's display name here as well." : "\"{user}\" هو عنصر نائب لاسم العرض الخاص بالمستخدم هنا أيضًا.",
    "Last N messages to consider for chat completions" : "آخر عدد \"س\" من الرسائل يُؤخذ في الاعتبار عند إكمال الدردشة",
    "This includes the user instructions and the LLM's messages" : "يتضمن ذلك تعليمات المستخدِم ورسائل \"النموذج اللغوي الوسيع\" LLM",
    "Number of messages to consider for chat completions (excluding the user instructions, which is always considered)" : "عدد الرسائل التي تُؤخذ في الاعتبار عند إكمال الدردشة (باستثناء تعليمات المستخدم، والتي يتم أخذها في الاعتبار دائماً)",
    "Assistant admin options saved" : "تمّ حفظ خيارات المشرف للمُساعد  ",
    "Failed to save assistant admin options" : "تعذّر حفظ خيارات المشرف للمُساعد ",
    "The task ran successfully but the result is identical to the input." : "تمّ تنفيذ المهمة بنجاح لكن النتيجة ظهرت مطابقة للمُدخل.",
    "This output was generated by AI. Make sure to double-check and adjust." : "المخرجات تمّ توليدها بالذكاء الاصطناعي. إنتبه لتأكيد المراجعة و الضبط.",
    "Back to the assistant" : "عودة إلى المساعد",
    "Previous \"{taskTypeName}\" tasks" : "مهام \"{taskTypeName}\" سابقة",
    "Show previous tasks" : "إظهار المهام السابقة",
    "Hide advanced options" : "إخفِ الخيارات المتقدمة",
    "Show advanced options" : "أظهِر الخيارات المتقدمة",
    "Try again" : "عاود المحاولة",
    "Send request" : "أرسِل طلباً",
    "Launch this task again" : "أعِد إطلاق هذه المهمة  ",
    "Launch a task" : "أطلِق مهمة",
    "Generate a first draft for a blog post about privacy" : "أنشيء نسخة أوّليّة من منشور في مُدوّنة حول الخصوصية",
    "What is the venue for the team retreat this quarter?" : "أين مكان احتفال الفريق في ربع السنة هذا؟",
    "Type or paste the text to summarize" : "أكتُب أو ألصِق النص للتلخيص",
    "Type or paste the text to generate a headline for" : "أكتُب أو ألصِق النص لاقتراح عنوان له",
    "Type or paste the text to extract the topics from" : "أكتُب أو ألصِق النص لاستخلاص الموضوعات منه",
    "landscape trees forest peaceful" : "منظر طبيعي أشجار غابة هادئة",
    "a number" : "رقم",
    "Shakespeare or an example of the style" : "شكسبير أو مثال على الأسلوب",
    "A description of what you need or some original content" : "وصف لما تريده أو بعض من المحتوى الأصلي",
    "Close" : "إغلاق",
    "Close Nextcloud Assistant" : "أغلِق مُساعِد نكست كلاود Nextcloud Assistant",
    "New conversation" : "محادثة جديدة",
    "Loading conversations…" : "تحميل المحادثات جارٍ ...",
    "No conversations yet" : "لا توجد أي محادثاتٍ بعدُ",
    "Delete" : "حذف",
    "Conversation title" : "عنوان المحادثة",
    "Edit title" : "تحرير عنوان",
    "Generate title" : "اقتراح عنوان",
    "Creating a new conversation" : "إنشاء محادثة جديدة",
    "Hello there! What can I help you with today?" : "أهلاً بك! كيف يمكنني مساعدتك اليوم؟",
    "Try sending a message to spark a conversation." : "حاول إرسالة رسالة لإثارة محادثة.",
    "Load older messages" : "تحميل الرسائل القديمة",
    "Retry response generation" : "إعادة توليد الاستجابة",
    "Error updating title of conversation" : "حدث خطأ أثناء تحديث عنوان المحادثة",
    "Untitled conversation" : "محادثة بدون عنوان",
    "Error generating a title for the conversation" : "حدث خطأ عند توليد عنوان للمحادثة",
    "Error deleting conversation" : "حدث خطأ عند حذف المحادثة",
    "Error fetching conversations" : "حدث خطأ عند جلب المحادثات",
    "Error deleting message" : "حدث خطأ عند حذف الرسالة",
    "Error fetching messages" : "حدث خطأ عند جلب الرسائل",
    "Error creating a new message" : "حدث خطأ عند إنشاء رسالة جديدة",
    "Invalid response received for a new conversation request" : "استجابة خاطئة تمّ استقبالها بناءً على طلب محادثة جديدة",
    "Error creating a new conversation" : "حدث خطأ عند إنشاء محادثة جديدة",
    "Error generating a response" : "حدث خطأ عند توليد استجابة",
    "Error regenerating a response" : "حدث خطأ عند إعادة توليد استجابة",
    "Error loading messages" : "حدث خطأ عند تحميل الرسائل",
    "Loading messages…" : "تحميل الرسائل جارٍ ...",
    "The text must be shorter than or equal to {maxLength} characters, currently {length}" : "النص طوله حاليّاً  {length} حرف و يجب ألّا يتعدى {maxLength} حرف ",
    "Cancel editing" : "إلغاء التحرير",
    "Submit" : "إرسال ",
    "Type a message…" : "أُكتُب رسالةً ...",
    "Processing…" : "قيدَ المعالجة ...",
    "You" : "أنتَ",
    "Message copied to clipboard" : "تمّ نسخ الرسالة إلى الحافظة",
    "Copy message" : "نسخ الرسالة",
    "Regenerate message" : "إعادة توليد الرسالة",
    "Delete message" : "إحْذِفِ الرسالة",
    "Selective context" : "سياق انتقائي",
    "Select Files/Folders" : "تحديد الملفات أو المجلدات",
    "Select Providers" : "تحديد المزودين",
    "Choose Files/Folders" : "إختَر الملفات/المجلدات",
    "Choose" : "إختَر",
    "Clear Selection" : "إلغاء التحديد",
    "Error fetching default provider key" : "حدث خطأ في جلب مفتاح المزود التلقائي",
    "Error fetching providers" : "حدث خطأ في جلب المزودين",
    "No sources referenced" : "لم تتم الإشارة لأي مصادر",
    "No provider found" : "لا يوجد أي مزود",
    "AI Providers need to be installed to use the Assistant" : "يجب تثبيت مزودين للذكاء الاصطناعي حتى يتسنّى استعمال المُساعد",
    "tool" : "أداة",
    "integration" : "تكامل",
    "complete AI documentation" : "توثيق كامل للذكاء الاصطناعي",
    "AI provider apps can be found in the {toolLink} and {integrationLink} app settings sections." : "تطبيقات مزود الذكاء الاصطناعي يمكن العثور عليها في {toolLink} و {integrationLink} في أقسام إعدادات التطبيق.",
    "You can also check the {aiAdminDocLink}" : "يمكنك أيضاً الاطلاع على {aiAdminDocLink}",
    "AI image generation smart picker" : "اللاقط الذكي لتوليد الصِّور بالذكاء الاصطناعي",
    "AI transcription smart picker" : "اللاقط الذكي للاستنساخ بالذكاء الاصطناعي",
    "No suitable providers are available. They must first be enabled by your administrator." : "لا يوجد أيّ مُزوِّد مستقر متاح. يجب أوّلاً تمكينه من قِبل المُشرِف.",
    "Configured Backends" : "الواجهات الخلفية المهيأة",
    "The following services are used as backends for Nextcloud Assistant:" : "الخدمات التالية تُستعمل كواجهات خلفية لتطبيق \"المساعد Assistant\" في نكست كلاود",
    "{providerName} for {taskName}" : "{providerName} لـ {taskName}",
    "Assistant options saved" : "تمّ حفظ خيارات المُساعِد",
    "Failed to save assistant options" : "تعذّر حفظ خيارات المُساعِد",
    "Getting results…" : "البدء ...",
    "Run task in the background and get notified" : "تنفيذ المهمة في الخلفية و من ثَمَّ إعلامي",
    "Back to the Assistant" : "عودة إلى \"المُساعِد\"",
    "Cancel task" : "إلغاء المهمة",
    "You will receive a notification when it has finished" : "سوف تستلم إشعاراً عند الانتهاء",
    "Your task has been scheduled" : "مُهمَّتك تمّت جدولتها",
    "Nothing yet" : "لا شيء حتى الآن",
    "You have not submitted any \"{taskTypeName}\" task yet" : "أنت لم تُرسل أي مهمة \"{taskTypeName}\" حتى الآن",
    "Cancel" : "إلغاء",
    "Succeeded" : "تمّت بنجاح",
    "Cancelled" : "ملغى",
    "Failed" : "فشل",
    "Running" : "ركض",
    "Scheduled" : "مُجدول",
    "Input" : "مُدخَلات",
    "Result" : "النتيجة",
    "This task is scheduled" : "المهمة تمّت جدولتها",
    "Unknown status" : "الحالة غير معروفة",
    "_{n} image has been generated_::_{n} images have been generated_" : ["{n} صورة تمّ توليدها","{n} صورة تمّ توليدها","{n} صورة تمّ توليدها","{n} صور تمّ توليدها","{n} صورة تمّ توليدها","{n} صورة تمّ توليدها"],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["عملية توليد {n} صورة تمّت جدولتها","عملية توليد {n} صورة تمّت جدولتها","عملية توليد {n} صورة تمّت جدولتها","عملية توليد {n} صور تمّت جدولتها","عملية توليد {n} صورة تمّت جدولتها","عملية توليد {n} صورة تمّت جدولتها"],
    "Start recording" : "بدء التسجيل",
    "Dismiss recording" : "رفض التسجيل",
    "End recording and send" : "إنهاء التسجيل والإرسال",
    "Error while recording audio" : "خطأ أثناء تسجيل الصوت",
    "Choose file" : "إختَر ملفاً",
    "Choose a file" : "إختيار ملف",
    "No file selected" : "لم تقم بتحديد أي ملف",
    "Choose a value" : "إختَر قيمةً",
    "Upload from device" : "إرفَع من الجهاز",
    "Select from Nextcloud" : "إختَر من نكست كلاود",
    "Pick one or multiple files" : "إختَر ملفاً أو أكثر",
    "Remove this media" : "حذف هذه الوسائط",
    "Download this media" : "حمِّل هذه الوسائط",
    "Share this media" : "شارِك هذه الوسائط",
    "Share" : "مُشارَكة",
    "Could not upload the recorded file" : "تعذّر رفع الملف المسجل",
    "Output file share link copied to clipboard" : "رابط مشاركة ملف الخرج تمّ نسخه إلى الحافظة",
    "Could not copy to clipboard" : "لم يستطع النسخ الى الحافظة",
    "Pick a file" : "إختَر ملفاً",
    "Clear value" : "مَحْو القيمة",
    "Type some number" : "أكتُب رقماً",
    "The current value is not a number" : "القيمة الحالية ليست رقماً",
    "Advanced" : "مُتقدِّمةٌ",
    "Copy output" : "نسخ المخرجات",
    "Copy" : "إنسَخ",
    "Choose a text file" : "إختَر ملفاً نصّيّاً",
    "Unexpected response from text parser" : "استجابة غير متوقعة من محلل النصوص",
    "Could not parse file" : "تعذّر تحليل الملف",
    "Result could not be copied to clipboard" : "يتعذّر نسخ النتيجة إلى الحافظة",
    "Upload file" : "رفع ملف",
    "Could not upload the file" : "يتعذّر رفع الملف",
    "Could not upload the files" : "يتعذّر رفع الملفات",
    "Your task with ID {id} has failed" : "مهمتك ذات الرقم {id} فشلت",
    "Failed to schedule your task" : "تعذّرت جدولة مُهِمّتك",
    "Submit the current task's result" : "أرسِل نتيجة المهمة الحالية",
    "Assistant error" : "حدث خطأ في عمل المُساعد",
    "Please log in to view the task result" : "أدُخل رجاءً لمشاهدة نتيجة المهمة",
    "This task does not exist or has been cleaned up" : "هذه المهمة غير موجودة أو تمّ محوُها",
    "Failed to schedule the task" : "تعذّرت جدولة المُهِمّة",
    "Failed to get the last message" : "تعذّر الحصول على آخر رسالة",
    "Failed to process prompt; unknown user" : "فشل في معالجة الطلب. مُستخدِم غير معروف",
    "Failed to get prompt history; unknown user" : "رفشل في الحصول على تاريخ الطلب. مُستخدِم غير معروف",
    "Failed to get outputs; unknown user" : "فشل في الحصول على نتيجة الطلب. مُستخدِم غير معروف",
    "Failed to cancel generation; unknown user" : "فشل في إلغاء التوليد. مُستخدِم غير معروف",
    "Some internal error occurred. Contact your sysadmin for more info." : "حدث خطأ داخلي. تواصل مع مشرف النظام عندك لمزيد من المعلومات. ",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "لم يمكن أيجاد أي مُزوِّد لخدمة التحويل من كلام إلى نص. قم بتصيب مُزوِّد من متجر التطبيقات ليمكنك استعما ل هذه الخاصّية.",
    "Audio file not found." : "الملف الصوتي غير موجود.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "لا تمتلك الإذن بإنشاء ملف أو مجلد للتسجيلات. تواصل مع مشرف النظام عندك لحل الإشكالية.",
    "Failed to set visibility of image files; unknown user" : "فشل في ضبط سماحية العرض لملفات الصور. مُستخدِم غير معروف",
    "Unknown error while retrieving prompt history." : "حدث خطأ غير محدد أثناء استرجاع السجل التاريخي للمَحَثّ.",
    "Context write" : "كتابة السياق",
    "Writes text in a given style based on the provided source material." : "يكتُب النص أسلوب معين بناءً على المادة المصدرية المتوفرة",
    "Transcribe" : "الإملاء Transcribe",
    "Transcribe audio to text" : "تحويل كلام إلى نص",
    "Generate image" : "توليد صورة",
    "Generate an image from a text" : "توليد صورة من نص",
    "Canceled by user" : "تمّ الغاؤه من قِبَل المستخدِم",
    "FreePromptTaskType not available" : "FreePromptTaskType غير متوفر",
    "Failed to run or schedule a task" : "فشل في تنفيذ أو جدولة مهمة",
    "Failed to get prompt history" : "فشل في الحصول على تاريخ المٌطالبة",
    "Generation not found" : "التوليدة غير موجودة",
    "Multiple tasks found" : "تمّ العثور على مهام متعددة",
    "Transcript not found" : "النص غير موجود",
    "No text to image processing provider available" : "لا يوجد مزود لتحويل النص إلى صورة",
    "Image request error" : "خطأ في طلب الصورة",
    "Image generation not found." : "تعذّر العثور على توليد الصِّوَر.",
    "Retrieving the image generation failed." : "إستعادة توليدة النص فشلت.",
    "Image generation failed." : "فشل في توليد الصِّوَر.",
    "Image file names could not be fetched from database" : "تعذّر جلب أسماء ملفات الصِّوَر من قاعدة البيانات",
    "Image file not found in database" : "ملف الصورة غير موجود في قاعدة البيانات",
    "Image file not found" : "ملف الصورة غير موجود",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "يوفر هذا التطبيق واجهة مستخدم لاستعمال ميزة معالجة النص في نكست كلاود. \n\n\nإذ هو يسمح للمستخدمين ببدء مهام الذكاء الاصطناعي، ليتم إعلامهم عند الانتهاء منها لرؤية نتائح طلباتهم. \nيظهر المساعد أيضًا في تطبيقات أخرى مثل تطبيق النصوص في نكست كلاود Text لمعالجة أجزاء من المستند بسهولة. \n\nمزيد من التفاصيل حول واجهة برمجة تطبيقات OCS المساعدة وإمكانيات تكامل الواجهة الأمامية في [وثائق المطور] (https://github.com/nextcloud/assistant/raw/main/docs/developer) \n\n### كيفية الاستعمال \nيظهر مدخل جديد في القائمة الجانبية للترويسة. بمجرد النقر عليه، يتم عرض المساعد ويمكنك تحديد نوع المهمة و تعيين الإدخال الذي تريد معالجته. قد يتم تشغيل المهمة على الفور أو تتم جدولتها وفقًا لتقدير الوقت الذي يقدمه موفر الذكاء الاصطناعي. بمجرد جدولة المهمة، سيتم تشغيلها كمهمة خلفية. عند الانتهاء، سوف تتلقى إشعاراً و الذي يمكن من خلاله استعراض نتيجة الطلب. \nيمكن للتطبيقات الأخرى التكامل مع المساعد. على سبيل المثال، سيعرض النص زراً مُضمَّناً بجانب كل فقرة لتحديد نوع المهمة مباشرة لمعالجة هذه الفقرة. سيؤدي تحديد المهمة بهذه الطريقة إلى فتح المساعد بالمهمة المحددة مسبقا و مجموعة نص الإدخال. \n\nمزيد من التفاصيل ولقطات الشاشة في [مستند المستخدم] (https://github.com/nextcloud/assistant/raw/main/docs/user). \n\n## ميزات المساعد\n\nتعتمد قائمة المهام المتاحة على مزودي الخدمة المتاحين المثبتين عبر تطبيقات أخرى. هذا يعني أن لديك الحرية الكاملة في تحديد الخدمة/البرنامج الذي سيقوم بالفعل بتشغيل مهام الذكاء الاصطناعي الخاصة بك. \n\n### معالجة النصوص \nمزودو الخدمة المتاحون حاليّاً: \n* [النموذج اللغوي الوسيع LLM] (https://github.com/nextcloud/llm#readme)، \n* [تكامل OpenAi/LocalAI] (https://apps.nextcloud.com/apps/integration_openai) \nلتوفير الخدمات التالية: \n* التلخيص \n* استخلاص المواضيع \n* إنشاء العناوين \n* الحصول على إجابة من طلب مجاني \n* إعادة صياغة النص (في حالة OpenAi/LocalAi فقط) \n* الكتابة بحسب سياق معين: إنشاء نص بنمط محدد. يمكن وصف النمط أو تقديمه عبر نص مماثل.\n\n ### تحويل النص إلى صورة (توليد الصور) \nمزودو الخدمة المتاحون حاليّاً: \n* [تكامل OpenAi/LocalAI] (https://apps.nextcloud.com/apps/integration_openai)، \n* [الانتشار المستقر لـ Text2Image] (https://apps.nextcloud.com/apps/text2image_stablediffusion) \n\n### تحويل الكلام إلى نص (الاستنساخ الصوتي) \nمزودو الخدمة المتاحون حاليّاً: \n* [تكامل OpenAi/LocalAI] (https://apps.nextcloud.com/apps/integration_openai) \n* [الهامس لتحويل الكلام إلى نص محليّاً] (https://apps.nextcloud.com/apps/stt_whisper)",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "لتمكين هذه الخاصّيّة، قم رجاءً بتثبيت مزود لمعالجة النصوص بالذكاء الصناعي لطلب المهام من النوع المجاني.",
    "To enable this feature, please install a text-to-image provider." : "لتمكين هذه الخاصِّيّة، قم رجاءً بتثبيت \"مُزوِّد تحويل النصوص إلى صور\" text-to-image provider.",
    "To enable this feature, please install a speech-to-text provider." : "لتمكين هذه الخاصّية، قم رجاءً بتثبيت مزُوِّد لتحويل الكلام إلى نص.",
    "Image storage" : "تخزين الصِّوَر",
    "Image generation idle time (days)" : "وقت خمول توليد الصور (بالأيام)",
    "Days until generated images are deleted if they are not viewed" : "الزمن بالأيام قبل حذف الصور المولدة إذا لم يتم عرضها",
    " This includes the user instructions and the LLM's messages" : "هذا يتضمن تعليمات المستخدِم و رسائل \"النماذج اللغوية الوسيعة\" LLMs",
    "Writing style" : "أسلُوب الكتابة",
    "Describe the writing style you want to use or supply an example document." : "صِف أسلُوب الكتابة الذي ترغب في استعماله أو اعطِ مستنداً كنموذج.",
    "Source material" : "مصدر المواد",
    "Describe what you want the document to be written on." : "صِف الشيء الذي ترغب أن يتحدث عنه المستند",
    "Type some text" : "أكتُب أيَّ نص",
    "Output" : "المُخرَجَات",
    "Copy output text to clipboard" : "نسخ المخرجات  إلى الحافظة",
    "Reset the output value to the originally generated one" : "إعادة تعيين قيمة المخرجات إلى تلك المٌولَّدة بدايةً",
    "Reset" : "إعادة التعيين",
    "Text Generation" : "توليد النص",
    "Audio transcription" : "الترقين الصوتي Audio transcription",
    "Unknown Result Type" : "نوع النتيجة غير معروف",
    "The task ran successfully but the generated text is empty." : "تمّ تنفيذ المهمة بنجاح لكن النص المُولّد ظهر فارغاً",
    "Run a task" : "تنفيذ مهمة",
    "Loading conversations..." : "تحميل المحادثات ...",
    "Edit Title" : "تعديل العنوان",
    "Generate Title" : "توليد العنوان",
    "Loading messages..." : "تحميل الرسائل جارٍ ...",
    "Type a message..." : "أكتُب رسالةً ...",
    "Thinking..." : "تفكير ...",
    "Text generation content" : "محتوى توليدة نَصّية",
    "The text generation task was scheduled to run in the background." : "مهمة توليد النص تمّت جدولتها لتنفذ في الخلفية",
    "Estimated completion time: " : "الوقت التقريبي المقدر للانتهاء:",
    "This can take a while…" : "هذا يمكن أن يستغرق بعض الوقت ...",
    "Some generations are still being processed in the background! Showing finished generations." : "بعض التوليدات مازالت تحت المعالجة في الخلفية! عرض التوليدات الجاهزة.",
    "Loading generations…" : "تحميل التوليدات ...",
    "Include prompt in the final result" : "تضمين الطلب في النتيجة النهائية",
    "Unexpected server response" : "استجابة غير متوقعة من الخادم",
    "The processing of generations failed." : "معالجة التوليدات أخفقت.",
    "The processing of some generations failed." : "معالجة بعض التوليدات أخفقت.",
    "Text generation error" : "خطأ في التوليدة النصية",
    "Unknown text generation API error" : "خطأ غير محدد في API الخاص بتوليد النصوص",
    "Prompt" : "المُطالبة prompt",
    "Result {index}" : "النتيجة {index}",
    "Run in the background" : "شغِّل في الخلفية",
    "Record Audio" : "تسجيل صوتي",
    "Choose Audio File" : "إختَر الملف الصوتي",
    "Reset recorded audio" : "إعادة تعيين الصوت المُسجّل",
    "Stop recording" : "إيقاف التسجيل",
    "No audio file selected" : "لم يتم تحديد أي ملف صوتي",
    "Selected Audio File:" : "الملف الصوتي المحدّد:",
    "Choose audio file in your storage" : "إختَر ملفاً صوتيّاً من محفوظاتك",
    "Choose audio File" : "إختَر ملفاً صوتيّاً",
    "Copy result" : "نسخ النتيجة",
    "Audio input" : "المدخلات الصوتية",
    "Unknown input" : "مدخلات غير معروفة",
    "Running…" : "قيد التنفيذ ...",
    "Unknown error" : "خطأ غير مُحدّدٍ",
    "Task result was copied to clipboard" : "تمّ نسخ نتيجة المهمة إلى الحافظة",
    "Image generation" : "توليد الصورة",
    "Edit visible images" : "تعديل صور مرئية",
    "Click to toggle generation visibility" : "إضغَط لتبديل وضعية رؤية التوليد",
    "Generated image" : "صورة مُولّدة",
    "This generation has no visible images" : "التوليد ليس فيه أي صور مرئية",
    "Estimated generation time left: " : "المتبقى من الزمن المقدر للتوليد:",
    "The image(s) will be displayed here once generated." : "سيتم عرض الصور(ة) هنا بمجرد إتمام توليدها.",
    "This image generation was scheduled to run in the background." : "توليد الصور تمّت جدولته ليتم تنفيذه في الخلفية.",
    "Image generation failed" : "فشل في توليد الصورة",
    "Rate limit reached. Please try again later." : "تمّ استنفاذ حصتك في الخدمة. يرجى المحاولة في وقت آخر.",
    "Unknown server query error" : "خطأ غير معروف عند استعلام الخادم",
    "Failed to get images" : "تعذّر الحصول على الصِّوَر",
    "Include the prompt in the result" : "قم بتضمين المَحَثّ prompt في النتيجة",
    "Number of results" : "عدد النتائج",
    "Enter your question or task here:" : "أدخِل سؤالك أو مهمتك هنا:",
    "Preview text generation by AI" : "معاينة توليدة نصية بالذكاء الاصطناعي",
    "Notify when ready" : "أعلِمني عندما تكون جاهزاً",
    "Submit text generated by AI" : "إرسال النص المُولّد بالذكاء الاصطناعي",
    "Regenerate" : "أعِد التوليد",
    "Preview" : "مُعاينة",
    "You will be notified when the text generation is ready." : "سوف يتم إشعارك بمجرد انتهاء التوليدة النصية.",
    "Notify when ready error" : "حدث خطأ عند الإعلام بالجاهزية",
    "Unknown notify when ready error" : "حدث خطأ غير محدد عند الإعلام بالجاهزية",
    "The task could not be found. It may have been deleted." : "تعذّر إيجاد المهمة. يُمكن أن يكون قد سبق حذفها.",
    "Schedule Transcription" : "قم بجدولة عملية الاستنساخ",
    "Successfully scheduled transcription" : "تمّت بنجاح جدولة عملية الاستنساخ",
    "Failed to schedule transcription" : "تعذّرت جدولة عملية الاستنساخ",
    "Unknown API error" : "خطأ API غير محدّد",
    "Preview image generation by AI" : "معاينة الصور المولدة بالذكاء الاصطناعي",
    "Submit image(s) generated by AI" : "إرسال الصورة ( أو الصور) المولدة بالذكاء الاصطناعي",
    "Send" : "أرسِل",
    "Show/hide advanced options" : "إظهار/إخفاء الخيارات المتقدمة",
    "Advanced options" : "الخيارات المتقدمة",
    "A description of the image you want to generate" : "وصفٌ للصورة التي ترغب في توليدها",
    "Image generation cancel error" : "حدث خطأ عند إلغاء توليد الصور",
    "Unknown image generation cancel error" : "حدث خطأ غير معروف عند إلغاء توليد الصور",
    "Unexpected response from server." : "استجابة غير متوقعة من الخادم.",
    "Image generation error" : "حدث خطأ عند توليد الصور",
    "Unknown image generation error" : "حدث خطأ غير محدد عند توليد الصور",
    "You will be notified when the image generation is ready." : "سوف يتم إعلامك عندما يجهَز توليد الصور.",
    "Copy the link to this generation to clipboard" : "إنسَخ رابط هذه التوليدة إلى الحافظة",
    "Copy link to clipboard" : "انسخ الرابط إلى الحافظة",
    "Image link copied to clipboard" : "رابط الصورة تمّ نسخه إلى الحافطة",
    "Image link could not be copied to clipboard" : "تعذّر نسخ رابط الصورة إلى الحافظة"
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
