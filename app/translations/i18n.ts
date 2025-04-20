import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import he from "./he.json";

i18n.use(initReactI18next).init({
  // lng: "en",
  // fallbackLng: "en",
  lng: "he",
  fallbackLng: "he",
  interpolation: { escapeValue: false },
  resources: {
    en: { translation: en },
    he: { translation: he },
  },
});

export default i18n;
