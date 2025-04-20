import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import he from "./he.json";
import { Languages } from "./languages";

i18n.use(initReactI18next).init({
  lng: Languages.en.value,
  fallbackLng: Languages.en.value,
  interpolation: { escapeValue: false },
  resources: {
    en: { translation: en },
    he: { translation: he },
  },
});

export default i18n;
