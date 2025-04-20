import { useState } from "react";
import * as S from "./styles";
import { Languages } from "@/translations/languages";
import i18n from "@/translations/i18n";
import { isRtl } from "@/utils/language";

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(Languages.en);

  const handleToggleLanguage = () => {
    const nextLang =
      language.value === Languages.en.value ? Languages.he : Languages.en;

    setLanguage(nextLang);
    i18n.changeLanguage(nextLang.value);
    document.body.dir = isRtl(nextLang.value) ? "rtl" : "ltr";
  };

  return (
    <S.LanguageSwitcher onClick={handleToggleLanguage}>
      {language.label}
    </S.LanguageSwitcher>
  );
};
