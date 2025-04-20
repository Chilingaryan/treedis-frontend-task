import { useState } from "react";
import * as S from "./styles";
import i18n from "@/translations/i18n";
import { Languages } from "@/translations/languages";

export const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(Languages.en);

  const handleToggleLanguage = () => {
    const nextLang =
      language.value === Languages.en.value ? Languages.he : Languages.en;

    setLanguage(nextLang);
    i18n.changeLanguage(nextLang.value);
  };

  return (
    <S.LanguageSwitcher onClick={handleToggleLanguage} size="small">
      {language.label}
    </S.LanguageSwitcher>
  );
};
