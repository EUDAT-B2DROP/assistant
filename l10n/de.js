OC.L10N.register(
    "assistant",
    {
    "Failed to process prompt; unknown user" : "Fehler beim Verarbeiten der Eingabe; Unbekannter Benutzer",
    "Failed to get prompt history; unknown user" : "Eingabe-History konnte nicht abgerufen werden; unbekannter Benutzer",
    "Failed to get outputs; unknown user" : "Fehler beim Abrufen der Ausgabe; unbekannter Benutzer",
    "Failed to cancel generation; unknown user" : "Fehler beim Abbruch der Erstellung; unbekannter Benutzer",
    "Multiple tasks found" : "Mehrere Aufgaben gefunden",
    "Transcript not found" : "Transkript nicht gefunden",
    "Some internal error occurred. Contact your sysadmin for more info." : "Ein ist ein interner Fehler aufgetreten. Kontaktiere die Systemadministration für weitere Informationen.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Kein Sprache-zu-Text-Anbieter gefunden. Installiere einen aus dem App Store, um diese Funktion zu nutzen.",
    "Audio file not found." : "Audiodatei nicht gefunden.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "Keine Berechtigung zum Erstellen von Aufnahme-Datei/Verzeichnis. Kontaktiere deine Systemadministration, um dieses Problem zu lösen.",
    "Unknown error while retrieving prompt history." : "Unbekannter Fehler beim Abrufen des Eingabeaufforderungsverlaufs.",
    "Failed to set visibility of image files; unknown user" : "Fehler beim Festlegen der Sichtbarkeit von Bilddateien; unbekannter Benutzer",
    "Failed to notify when ready; unknown user" : "Fehler bei der Benachrichtigung der Fertigstellung; unbekannter Benutzer",
    "Nextcloud Assistant" : "Nextcloud-Assistent",
    "AI context writer" : "KI zum Kontext-Schreiben",
    "Writing style: %1$s; Source material: %2$s" : "Schreibstil: %1$s; Quellmaterial: %2$s",
    "AI text generation" : "KI-Texterstellung",
    "AI image generation" : "KI-Bilderstellung",
    "AI audio transcription" : "KI Audio-Transskription",
    "Task for \"%1$s\" has finished" : "Aufgabe für \"%1$s\" beendet",
    "\"%1$s\" task for \"%2$s\" has finished" : "\"%1$s\" Aufgabe für \"%2$s\" ist beendet",
    "Input: %1$s" : "Eingabe: %1$s",
    "Result: %1$s" : "Ergebnis: %1$s",
    "View results" : "Ergebnisse anzeigen",
    "Task for \"%1$s\" has failed" : "Aufgabe für \"%1$s\" ist fehlgeschlagen",
    "\"%1$s\" task for \"%2$s\" has failed" : "\"%1$s\" Aufgabe für \"%2$s\" ist fehlgeschlagen",
    "View task" : "Aufgabe anzeigen",
    "FreePromptTaskType not available" : "FreePromptTaskType nicht verfügbar",
    "Failed to run or schedule a task" : "Fehler bei der Ausführung oder Planung einer Aufgabe",
    "Failed to get prompt history" : "Eingabeverlauf konnte nicht abgerufen werden",
    "Generation not found" : "Erstellung nicht gefunden",
    "No text to image processing provider available" : "Kein Text-zu-Bild-Verarbeitungsanbieter verfügbar",
    "Image request error" : "Fehler bei der Bildanfrage",
    "Image generation not found." : "Bilderstellung nicht gefunden.",
    "Retrieving the image generation failed." : "Fehler beim Abruf des erstellten Bildes.",
    "Image generation failed." : "Bilderstellung fehlgeschlagen.",
    "Image file names could not be fetched from database" : "Bilddateinamen konnten nicht aus der Datenbank abgerufen werden",
    "Image file not found in database" : "Bilddatei nicht in der Datenbank gefunden",
    "Image file not found" : "Bilddatei nicht gefunden",
    "Artificial Intelligence" : "Künstliche Intelligenz",
    "Process and transform text" : "Text verarbeiten und transformieren",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch text processing tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\n### How to use it\n\nA new right header  menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input text you want to process.\n\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\n### Text processing providers\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your text processing tasks.\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)" : "Diese App bietet eine Benutzeroberfläche zur Nutzung der Nextcloud-Textverarbeitungsfunktion.\n\nSie ermöglicht Benutzern, Textverarbeitungsaufgaben zu starten, benachrichtigt zu werden, wenn sie erledigt sind, sowie die Ergebnisse anzuzeigen.\nDer Assistent erscheint auch in anderen Apps wie Text, um Teile eines Dokuments einfach zu verarbeiten.\n\n### Anleitung\n\nIn der rechten Kopfzeile wird ein neuer Menüeintrag angezeigt. Sobald du darauf klickst, wird der Assistent angezeigt und du kannst einen Aufgabentyp auswählen und\nden Eingabetext festlegen, der verarbeitet werden soll.\n\nSobald eine Aufgabe geplant ist, wird sie als Hintergrundjob ausgeführt. Nach der Fertigstellung erhälst du eine Benachrichtigung\nvon der aus die Ergebnisse angezeigt werden können.\n\nAndere Apps können in den Assistenten integriert werden. Beispielsweise zeigt Text neben jedem Absatz eine Inline-Schaltfläche an\num direkt einen Aufgabentyp zur Bearbeitung des Absatzes auszuwählen. Wenn du auf diese Weise eine Aufgabe auswählst, wird der Assistent mit der Aufgabe vorausgewählt\ngeöffnet und der Eingabetext festgelegt.\n\n### Textverarbeitungsanbieter\n\nIm Assistenten hängt die Liste der verfügbaren Aufgaben davon ab, welche Anbieter über andere Apps installiert worden sind.\nDu kannst also völlig frei entscheiden, welcher Dienst bzw. welche Software deine Textverarbeitungsaufgaben tatsächlich ausführt.\nBisher sind das [große Sprachmodell](https://github.com/nextcloud/llm#readme)\nund die [OpenAi/LocalAI-Integration](https://apps.nextcloud.com/apps/integration_openai) Apps\neingebunden, um:\n* Zusammenfassen\n* Extrahieren von Themen\n* Generieren einer Überschrift\n* Antworten über eine freie EIngabeaufforderung zu erhalten\n* Umformulieren von Texten (nur OpenAi/LocalAi)",
    "Select which features you want to enable" : "Wähle aus, welche Funktionen aktiviert werden sollen",
    "Top-right assistant" : "Assistent oben rechts",
    "To enable this feature, please install any AI text processing provider." : "Um diese Funktion zu aktivieren, installiere bitte einen KI-Textverarbeitungsanbieter.",
    "AI text generation smart picker" : "KI-Texterstellungs-Smart Picker",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "Um diese Funktion zu aktivieren, installiere bitte einen KI-Textverarbeitungsanbieter für den kostenlosen Aufgabentyp \"prompt\".",
    "Text-to-image smart picker" : "Text-zu-Bild Smart Picker",
    "To enable this feature, please install a text-to-image provider." : "Um diese Funktion zu aktivieren, installiere bitte einen Text-zu-Bild-Anbieter.",
    "Speech-to-text smart picker" : "Sprache zu Text Smart Picker",
    "To enable this feature, please install a speech-to-text provider." : "Um diese Funktion zu aktivieren, installiere bitte einen Sprache-zu-Text Anbieter.",
    "Image storage" : "Bild-Speicher",
    "Image generation idle time (days)" : "Bilderstellungs-Leerlaufzeit (Tage)",
    "Days until generated images are deleted if they are not viewed" : "Tage bis erstellte Bilder gelöscht werden, wenn sie nicht angesehen wurden.",
    "Assistant admin options saved" : "Assistenten-Administrationseinstellungen gespeichert",
    "Failed to save assistant admin options" : "Fehler beim Speichern der Assistenten-Administrationseinstellungen",
    "Writing style" : "Schreibstil",
    "Choose File" : "Datei auswählen",
    "Describe the writing style you want to use or supply an example document." : "Beschreibe den Schreibstil, den du verwenden möchtest, oder liefere ein Beispiel-Dokument",
    "Source material" : "Quellmaterial",
    "Describe what you want the document to be written on." : "Beschreibe, worauf das Dokument geschrieben werden soll.",
    "Input" : "Eingabe",
    "Type some text" : "Bitte einen Text eingeben",
    "Choose a text file" : "Textdatei auswählen",
    "No file selected" : "Benötigt keine Übersetzung. Hier wird nur die formelle Übersetzung verwendet (de_DE).",
    "Close" : "Schließen",
    "Close Nextcloud Assistant" : "Nextcloud-Assistent schließen",
    "Output" : "Ausgabe",
    "This output was generated by AI. Make sure to double-check and adjust." : "Dieses Ergebnis wurde von KI generiert. Überprüfe die Angaben und passe sie gegebenenfalls an.",
    "Reset" : "Zurücksetzen",
    "Result could not be copied to clipboard" : "Ergebnis konnte nicht in die Zwischenablage kopiert werden",
    "Result" : "Ergebnis",
    "Schedule an assistant task" : "Assistentenaufgabe planen",
    "Schedule" : "Planen",
    "Copy" : "Kopieren",
    "Try again" : "Nochmals versuchen",
    "Send request" : "Anfrage senden",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Eine Anfrage an den Assistenten stellen, z. B.: schreibe einen ersten Entwurf einer Präsentation, gib mir Vorschläge für eine Präsentation, schreibe einen Entwurf der Antwort an meinen Kollegen.",
    "No suitable providers are available. They must first be enabled by your administrator." : "Keine geeigneten Anbieter verfügbar. Diese müssen zunächst von deiner Administration aktiviert werden.",
    "Assistant options saved" : "Assistenteneinstellungen gespeichert",
    "Failed to save assistant options" : "Fehler beim Speichern der Assistenteneinstellungen",
    "Getting results…" : "Ergebnisse holen…",
    "Run in the background" : "Im Hintergrund ausführen",
    "You will receive a notification when it has finished" : "Du erhältst eine Benachrichtigung, wenn der Vorgang abgeschlossen ist",
    "Your task has been scheduled" : "Ihre Aufgabe wurde geplant",
    "Image generation" : "Bilderstellung",
    "Generated image" : "Erstelltes Bild",
    "Enter your question or task here:" : "Deine Frage oder Aufgabe hier eingeben:",
    "Submit" : "Übermitteln",
    "Regenerate" : "Neu erstellen",
    "Preview" : "Vorschau",
    "You will be notified when the text generation is ready." : "Du wirst benachrichtigt, wenn die Texterstellung abgeschlossen ist.",
    "Start recording" : "Benötigt keine Übersetzung. Hier wird nur die formelle Übersetzung verwendet (de_DE).",
    "Failed to schedule your task" : "Die Planung deiner Aufgabe ist fehlgeschlagen",
    "Send" : "Senden",
    "Show/hide advanced options" : "Erweiterte Optionen anzeigen/ausblenden",
    "Advanced options" : "Erweiterte Optionen",
    "A description of the image you want to generate" : "Eine Beschreibung des Bildes, das du erstellen lassen möchten",
    "You will be notified when the image generation is ready." : "Du wirst benachrichtigt, wenn die Bilderstellung bereit ist.",
    "Copy link to clipboard" : "Link in die Zwischenablage kopieren",
    "This task does not exist or has been cleaned up" : "Diese Aufgabe existiert nicht oder wurde bereinigt",
    "Failed to schedule the task" : "Die Planung der Aufgabe ist fehlgeschlagen"
},
"nplurals=2; plural=(n != 1);");
