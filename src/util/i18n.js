import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translations from "../assets/translations.js";

i18next.use(LanguageDetector).init({
	debug: false,
	fallbackLng: ["en", "sv"],
	resources: translations,
});
