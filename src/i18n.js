import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEng from "./locales/en-US/translation.json";
import translationFre from "./locales/fr-FR/translation.json";
import translationJap from "./locales/ja-JP/translation.json";

const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';
console.log(getCurrentLng)
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      
      lookupQuerystring: 'lng',        
      lookupCookie: 'i18n',
      lookupLocalStorage: 'i18nextLng',
    
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'],
    
      cookieMinutes: 10,
      cookieDomain: 'myDomain',
    
      htmlTag: document.documentElement
    },
    debug: false,
   // lng: "fr-FR", // define default language
    fallbackLng: ['en-US', 'fr-FR'],

    keySeparator: '.', // used to separate translations

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    resources: {
      "en-US": {
        translation: translationEng
      },
      "fr-FR": {
        translation: translationFre
      },
      "ja-JP": {
        translation: translationJap
      }
    },
    // have a common namespace used around the full app
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18n;
