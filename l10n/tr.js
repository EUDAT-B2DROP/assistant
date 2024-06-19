OC.L10N.register(
    "assistant",
    {
    "User not found" : "Kullanıcı bulunamadı",
    "Failed to process prompt; unknown user" : "Soru işlenemedi. Kullanıcı bilinmiyor",
    "Failed to get prompt history; unknown user" : "Soru geçmişi alınamadı. Kullanıcı bilinmiyor",
    "Failed to get outputs; unknown user" : "Çıktılar alınamadı. Kullanıcı bilinmiyor",
    "Failed to cancel generation; unknown user" : "Oluşturma iptal edilemedi. Kullanıcı bilinmiyor",
    "Some internal error occurred. Contact your sysadmin for more info." : "Bir iç sorun çıktı. Ayrıntılı bilgi almak için sistem yönecinizle görüşün.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Herhangi bir konuşmadan yazıya dönüştürme hizmeti bulunamadı. Bu özelliği kullanabilmek için uygulama mağazasından bir hizmet kurun.",
    "Audio file not found." : "Ses dosyası bulunamadı.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "Kayıt dosyası ya da klasörünü oluşturma izni yok. Sorunu çözmesi için sistem yöneticinizle görüşün.",
    "Failed to set visibility of image files; unknown user" : "Görsel dosyalarının görünürlüğü ayarlanamadı. Kullanıcı bilinmiyor",
    "Failed to notify when ready; unknown user" : "Hazır olduğunda bildirilemedi. Kullanıcı bilinmiyor",
    "Unknown error while retrieving prompt history." : "Soru geçmişi alınırken bilinmeyen bir sorun çıktı",
    "Nextcloud Assistant" : "Nextcloud Yardımcısı",
    "AI context writer" : "Yapay Zeka bağlama göre yazma",
    "Writing style: %1$s; Source material: %2$s" : "Yazma tarzı: %1$s. Kaynak materyali: %2$s",
    "AI text generation" : "Yapay Zeka ile metin oluşturma",
    "AI image generation" : "Yapay Zeka ile görsel oluşturma",
    "AI audio transcription" : "Yapay Zeka sesten yazıya dönüştürme",
    "Task for \"%1$s\" has finished" : "\"%1$s\" görevi tamamlandı",
    "\"%1$s\" task for \"%2$s\" has finished" : "\"%2$s\" için \"%1$s\" görevi tamamlandı",
    "Input: %1$s" : "Giriş: %1$s",
    "Result: %1$s" : "Sonuç: %1$s",
    "View results" : "Sonuçları görüntüle",
    "Task for \"%1$s\" has failed" : "\"%1$s\" görevi tamamlanamadı",
    "\"%1$s\" task for \"%2$s\" has failed" : "\"%2$s\" için \"%1$s\" görevi tamamlanamadı",
    "View task" : "Görevi görüntüle",
    "Generate text" : "Metni oluştur",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Asistan'a bir istek gönderin. Örneğin; bir sunumun ilk taslağını yaz, bir sunum için önerilerde bulun, meslektaşıma bir yanıt taslağı yaz.",
    "Context write" : "Bağlama göre yazma",
    "Writes text in a given style based on the provided source material." : "Sağlanan kaynak materyale göre belirli bir tarzda metin yazar.",
    "Transcribe" : "Dönüştür",
    "Transcribe audio to text" : "Sesten yazıya dönüştür.",
    "Generate image" : "Görsel oluştur",
    "Generate an image from a text" : "Bir yazıdan bir görsel oluştur",
    "Canceled by user" : "Kullanıcı tarafından iptal edildi",
    "FreePromptTaskType not available" : "FreePromptTaskType kullanılamıyor",
    "Failed to run or schedule a task" : "Bir görev yürütülemedi ya da zamanlanamadı",
    "Failed to get prompt history" : "Soru geçmişi alınamadı",
    "Generation not found" : "Oluşturma bulunamadı",
    "Multiple tasks found" : "Birden fazla görev bulundıu",
    "Transcript not found" : "Dönüştürme bulunamadı",
    "No text to image processing provider available" : "Kullanılabilecek bir yazıdan görsel oluşturma işleyici hizmet sağlayıcısı yok",
    "Image request error" : "Görsel isteğinde sorun çıktı",
    "Image generation not found." : "Görsel oluşturma bulunamadı.",
    "Retrieving the image generation failed." : "Görsel oluşturma alınamadı.",
    "Image generation failed." : "Görsel oluşturulamadı.",
    "Image file names could not be fetched from database" : "Görsel dosyası adları veri tabanından alınamadı",
    "Image file not found in database" : "Görsel dosyası veri tabanında bulunamadı",
    "Image file not found" : "Görsel dosyası bulunamadı",
    "Artificial Intelligence" : "Yapay Zeka",
    "Process and transform text" : "Metin işleme ve dönüştürme",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "Bu uygulama, Nextcloud metin işleme özelliğinin kullanılabileceği bir kullanıcı arayüzü sağlar.\n\nKullanıcıların yapay zeka görevleri başlatmasını, biten görevler hakkında  bilgi almasını ve sonuçları görmesini sağlar.\nYardımcı, bir belgenin bölümlerini kolayca işlemek için Metin gibi diğer uygulamalarda da görünür.\n\nYardımcı OCS API ve ön yüz bütünleştirme olanakları için \n[geliştirici belgelerine](https://github.com/nextcloud/assistant/raw/main/docs/developer) bakabilirsiniz.\n\n### Nasıl kullanılır\n\nSağ menüde yeni bir öge görünür. Bir kez tıklandığında, Yardımcı görüntülenir. Buradan yapmak istediğiniz\ngörev türünü ve işlemek istediğini girişi ayarlayabilirsiniz.\n\nGörev, yapay zeka hizmeti sağlayıcısının verdiği zaman öngörüsüne bağlı olarak hemen çalıştırılabilir ya da ileriye zamanlanabilir.\nZamanlanmış görevler arka planda yapılır. Görev tamamlandığında sonuçların görüntülenebileceği \nyerde bir bildirim görüntülenir.\n\nDiğer uygulamalar Yardımcı ile bütünleşik çalışabilir. Örneğin Metin uygulamasında, her paragrafın \nyanındaki satırda doğrudan bu paragrafı işleyecek bir görev türü seçen bir düğme görüntülenir.\nBir görev bu şekilde seçildiğinde, Yardımcı, görev seçilmiş ve metin ayarlanmış olarak açılır.\n\nAyrıntılı bilgi almak ve ekran görüntüleri için [kullanıcı belgelerine](https://github.com/nextcloud/assistant/raw/main/docs/user) bakabilirsiniz.\n## Özellikler\n\nYardımcıda, yapılabilecek görevlerin listesi, diğer uygulamalar üzerine kurulmuş hizmet sağlayıcılara bağlıdır.\nBöylece, hangi hizmetin/yazılımın metin işleme görevlerinizi yapacağını özgürce belirleyebilirsiniz.\n\n\n### Metin işleme hizmeti sağlayıcıları\n\nŞu anda [geniş dil modeli](https://github.com/nextcloud/llm#readme)\nve [OpenAi/LocalAI bütünleştirmesi](https://apps.nextcloud.com/apps/integration_openai) uygulamaları\nşu metin işleme hizmeti sağlayıcılarını sunuyor:\n* Özetleme\n* Konuları ayıklama\n* Bir başlık oluşturma\n* Serbest bir bilgi isteminden yanıt alma\n* Yeniden ifade etme (yalnızca OpenAi/LocalAi)\n* Bağlam yazma: Belirtilen biçimde metin oluşturma. Biçim, örnek bir metin aracılığıyla açıklanabilir veya sunulabilir.\n\n### Yazıdan görsele (görsel oluşturma)\n\nBilinen hizmet sağlayıcılar:\n* [OpenAi/LocalAI bütünleştirmesi](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Konuşmadan yazıya (ses dönüştürme)\n\nBilinen hizmet sağlayıcılar:\n* [OpenAi/LocalAI bütünleştirmesi](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)",
    "Select which features you want to enable" : "Kullanmak istediğiniz özellikleri seçin",
    "Top-right assistant" : "Sağ üst yardımcı",
    "To be able to use this feature, please install at least one AI text processing provider." : "Bu özelliği kullanabilmek için lütfen bir Yapay Zeka yazı işleme hizmeti sağlayıcısı kurun.",
    "AI text generation smart picker" : "Yapay Zeka metin oluşturma akıllı seçici",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "Bu özelliği etkinleştirmek için lütfen serbest soru görevi türü için bir Yapay Zeka yazı işleme hizmeti sağlayıcısı kurun.",
    "Text-to-image smart picker" : "Yazıdan görsele akıllı seçici<",
    "To enable this feature, please install a text-to-image provider." : "Bu özelliği etkinleştirmek için lütfen bir yazıdan görsele hizmeti sağlayıcısı kurun.",
    "Speech-to-text smart picker" : "Konuşmadan yazıya akıllı seçici",
    "To enable this feature, please install a speech-to-text provider." : "Bu özelliği etkinleştirmek için lütfen bir konuşmadan yazıya hizmeti sağlayıcısı kurun.",
    "Image storage" : "Görsel depolama alanı",
    "Image generation idle time (days)" : "Oluşturmanın boşta bekleme süresi (gün):",
    "Days until generated images are deleted if they are not viewed" : "Oluşturulan görsellere bakılmaması durumunda kaç gün sonra silinecekleri",
    "Assistant admin options saved" : "Yardımcı yönetici ayarları kaydedildi",
    "Failed to save assistant admin options" : "Yardımcı yönetici ayarları kaydedilemedi",
    "Writing style" : "Yazma tarzı",
    "Choose file" : "Dosya seçin",
    "Describe the writing style you want to use or supply an example document." : "Kullanmak istediğiniz yazma tarzını açıklayın ya da örnek bir belge sağlayın.",
    "Source material" : "Kaynak materyal",
    "Describe what you want the document to be written on." : "Belgenin ne üzerine yazılmasını istediğinizi açıklayın.",
    "Selective context" : "Seçici bağlam",
    "Input" : "Giriş",
    "Type some text" : "Bir şeyler yazın",
    "Choose a text file" : "Bir metin dosyası seçin",
    "Choose" : "Seçin",
    "No file selected" : "Herhangi bir dosya seçilmemiş",
    "Unexpected response from text parser" : "Metin işleyiciden beklenmeyen bir yanıt alındı",
    "Could not parse file" : "Dosya işlenemedi",
    "Close" : "Kapat",
    "Close Nextcloud Assistant" : "Nextcloud yardımcısını kapat",
    "Output" : "Çıktı",
    "This output was generated by AI. Make sure to double-check and adjust." : "Bu çıktı yapay zeka tarafından oluşturuldu. Yeniden kontrol edip düzenlediğinizden emin olun.",
    "Copy output text to clipboard" : "Çıktı metnini panoya kopyala",
    "Copy output" : "Çıktıyı kopyala",
    "Reset the output value to the originally generated one" : "Çıktı değerini oluşturulmuş özgün değere sıfırla",
    "Reset" : "Sıfırla",
    "Text Generation" : "Metin oluşturma",
    "Audio transcription" : "Sesten yazıya dönüştürme",
    "Unknown Result Type" : "Sonuç türü bilinmiyor",
    "Result could not be copied to clipboard" : "Sonuç panoya kopyalanamadı",
    "Back to the assistant" : "Yardımcıya dön",
    "Previous \"{taskTypeName}\" tasks" : "Önceki \"{taskTypeName}\" görevleri",
    "Result" : "Sonuç",
    "The task ran successfully but the result is identical to the input." : "Görev yapıldı ancak sonuç giriş ile aynı.",
    "The task ran successfully but the generated text is empty." : "Görev yapıldı ancak oluşturulan metin boş.",
    "Show previous tasks" : "Önceki görevleri görüntüle",
    "Run a task" : "Bir görev çalıştır",
    "Copy" : "Kopyala",
    "Try again" : "Yeniden dene",
    "Send request" : "İstek gönder",
    "New conversation" : "Yeni konuşma",
    "Delete" : "Sil",
    "You" : "Siz",
    "Cancel editing" : "Düzenlemeyi iptal et",
    "Submit" : "Gönder",
    "Delete message" : "İletiyi sil",
    "Select Files/Folders" : "Dosyaları veya klasörleri seçin",
    "Select Providers" : "Hizmet sağlayıcıları seçin",
    "Choose Files/Folders" : "Dosyaları veya klasörleri seçin",
    "Clear Selection" : "Seçimi temizle",
    "Error fetching default provider key" : "Varsayılan hizmet sağlayıcı anahtarı alınırken sorun çıktı",
    "Error fetching providers" : "Hizmet sağlayıcılar alınırken sorun çıktı",
    "Text generation content" : "Metin oluşturma içeriği",
    "The text generation task was scheduled to run in the background." : "Metin oluşturma görevi arka planda yürütülmek için zamanlandı.",
    "Estimated completion time: " : "Öngörülen tamamlanma süresi:",
    "This can take a while…" : "Bu işlemin tamamlanması biraz zaman alabilir…",
    "Some generations are still being processed in the background! Showing finished generations." : "Bazı oluşturmalar arka planda işleniyor! Tamamlanmış oluşturmalar görüntüleniyor. ",
    "Loading generations…" : "Oluşturmalar yükleniyor…",
    "Include prompt in the final result" : "Sonuca soru da katılsın",
    "Unexpected server response" : "Beklenmeyen bir sunucu yanıtı alındı",
    "The processing of generations failed." : "Oluşturmalar işlenemedi.",
    "The processing of some generations failed." : "Bazı oluşturmalar işlenemedi.",
    "Text generation error" : "Metin oluşturma sorunu",
    "Unknown text generation API error" : "Bilinmeyen metin oluşturma API sorunu",
    "Prompt" : "Soru",
    "Result {index}" : "Sonuç {index}",
    "No provider found" : "Herhangi bir hizmet sağlayıcı bulunamadı",
    "AI Providers need to be installed to use the Assistant" : "Yardımcıyı kullanabilmek için Yapay Zeka hizmeti sağlayıcıları kurulmuş olmalıdır",
    "tool" : "araç",
    "integration" : "bütünleştirme",
    "complete AI documentation" : "tam Yapay Zeka belgeleri",
    "AI provider apps can be found in the {toolLink} and {integrationLink} app settings sections." : "Yapay Zeka hizmeti sağlayıcı uygulamaları, {toolLink} ve {integrationLink} uygulama ayarları bölümlerinde bulunabilir.",
    "You can also check the {aiAdminDocLink}" : "Ayrıca {aiAdminDocLink} bölümüne bakabilirsiniz",
    "AI image generation smart picker" : "Yapay Zeka görsel oluşturma akıllı seçici",
    "AI transcription smart picker" : "Yapay Zeka dönüştürme akıllı seçici",
    "No suitable providers are available. They must first be enabled by your administrator." : "Kullanılabilecek bir hizmet sağlayıcısı yok. Öncelikle yöneticiniz tarafından etkinleştirilmeleri gerekir.",
    "Assistant options saved" : "Yardımcı ayarları kaydedildi",
    "Failed to save assistant options" : "Yardımcı ayarları kaydedilemedi",
    "Getting results…" : "Sonuçlar alınıyor…",
    "Run in the background" : "Arka planda yap",
    "You will receive a notification when it has finished" : "Göreviniz tamamlandığında bir bildirim alacaksınız",
    "Your task has been scheduled" : "Göreviniz zamanlandı",
    "Record Audio" : "Ses kaydet",
    "Choose Audio File" : "Ses dosyasını seçin",
    "Reset recorded audio" : "Kaydedilmiş sesi sıfırla",
    "Start recording" : "Kaydı başlat",
    "Stop recording" : "Kaydı durdur",
    "No audio file selected" : "Herhangi bir ses dosyası seçilmemiş",
    "Selected Audio File:" : "Seçilmiş ses dosyası:",
    "Choose audio file in your storage" : "Depolama alanınızdaki ses dosyasını seçin",
    "Choose audio File" : "Ses dosyasını seçin",
    "Nothing yet" : "Henüz bir şey yok",
    "You have not submitted any \"{taskTypeName}\" task yet" : "Henüz bir \"{taskTypeName}\" görevi göndermemişsiniz",
    "Copy result" : "Sonucu kopyala",
    "Cancel" : "İptal",
    "Audio input" : "Ses girişi",
    "Unknown input" : "Giriş bilinmiyor",
    "This task is scheduled" : "Bu görev zamanlandı",
    "Running..." : "Yapılıyor...",
    "Failed" : "Tamamlanamadı",
    "Unknown error" : "Sorun bilinmiyor",
    "Unknown status" : "Durum bilinmiyor",
    "Succeeded" : "Tamamlandı",
    "Running" : "Yapılıyor",
    "Scheduled" : "Zamanlanmış",
    "Task result was copied to clipboard" : "Görev sonuçları panoya kopyalandı",
    "_{n} image has been generated_::_{n} images have been generated_" : ["{n} görsel oluşturuldu","{n} görsel oluşturuldu"],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["{n} görselin oluşturulması zamanlandı","{n} görselin oluşturulması zamanlandı"],
    "Image generation" : "Görsel oluşturma",
    "Edit visible images" : "Görülebilir görselleri düzenle",
    "Click to toggle generation visibility" : "Oluşturma görünürlüğünü değiştirmek için tıklayın",
    "Generated image" : "Oluşturulan görsel",
    "This generation has no visible images" : "Bu oluşturmada görülebilecek bir görsel yok",
    "Estimated generation time left: " : "Oluşturma için öngörülen kalan süre:",
    "The image(s) will be displayed here once generated." : "Görseller oluşturulduktan sonra burada görüntülenir.",
    "This image generation was scheduled to run in the background." : "Bu görsel oluşturma görevi arka planda yürütülmek için zamanlandı.",
    "Image generation failed" : "Görsel oluşturulamadı",
    "Rate limit reached. Please try again later." : "Sınıra ulaşıldı. Lütfen bir süre sonra yeniden deneyin.",
    "Unknown server query error" : "Bilinmeyen sunucu sorgulama sorunu",
    "Failed to get images" : "Görseller alınamadı",
    "Include the prompt in the result" : "Sonuca soru da katılsın",
    "Number of results" : "Sonuç sayısı",
    "Failed to schedule your task" : "Göreviniz zamanlanamadı",
    "Enter your question or task here:" : "Sorunuzu ya da görevinizi buraya yazın:",
    "Preview text generation by AI" : "Yapay Zeka ile oluşturulmuş metin ön izlemesi",
    "Notify when ready" : "Hazır olduğunda bilgilendir",
    "Submit text generated by AI" : "Yapay Zeka ile oluşturulmuş metni gönder",
    "Regenerate" : "Yeniden oluştur",
    "Preview" : "Ön izleme",
    "You will be notified when the text generation is ready." : "Oluşturulan metin hazır olduğunda size bildirilecek.",
    "Notify when ready error" : "Hazır olduğunu bildirme sorunu",
    "Unknown notify when ready error" : "Bilinmeyen hazır olduğunu bildirme sorunu",
    "The task could not be found. It may have been deleted." : "Görev bulunamadı. Silinmiş olabilir.",
    "Schedule Transcription" : "Dönüştürmeyi zamanla",
    "Successfully scheduled transcription" : "Dönüştürme zamanlandı",
    "Failed to schedule transcription" : "Dönüştürme zamanlanamadı",
    "Unknown API error" : "Bilinmeyen bir API sorunu çıktı",
    "Preview image generation by AI" : "Yapay Zeka ile görsel oluşturma ön izlemesi",
    "Submit image(s) generated by AI" : "Yapay Zeka ile oluşturulan görselleri gönder",
    "Send" : "Gönder",
    "Show/hide advanced options" : "Gelişmiş ayarları görüntüle/gizle",
    "Advanced options" : "Gelişmiş ayarlar",
    "A description of the image you want to generate" : "Oluşturmak istediğiniz görselin açıklaması",
    "Image generation cancel error" : "Görsel oluşturma iptali sorunu",
    "Unknown image generation cancel error" : "Bilinmeyen görsel oluşturma iptali sorunu",
    "Unexpected response from server." : "Sunucudan beklenmeyen bir yanıt alındı.",
    "Image generation error" : "Görsel oluşturma sorunu",
    "Unknown image generation error" : "Bilinmeyen görsel oluşturma sorunu",
    "You will be notified when the image generation is ready." : "Görsel oluşturma hazır olduğunda size bildirilecek.",
    "Copy the link to this generation to clipboard" : "Bu oluşturmanın bağlantısını panoya kopyala",
    "Copy link to clipboard" : "Bağlantıyı panoya kopyala",
    "Image link copied to clipboard" : "Görsel bağlantısı panoya kopyalandı",
    "Image link could not be copied to clipboard" : "Görsel bağlantısı panoya kopyalanamadı.",
    "Assistant error" : "Yardımcı sorunu",
    "This task does not exist or has been cleaned up" : "Bu görev bulunamadı ya da temizlenmiş",
    "Failed to schedule the task" : "Görev zamanlanamadı"
},
"nplurals=2; plural=(n > 1);");
