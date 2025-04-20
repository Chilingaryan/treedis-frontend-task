import { useMemo, useEffect } from "react";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";

export const useTranslatedSchema = <T>(getSchema: (t: TFunction) => T) => {
  const { t, i18n } = useTranslation();
  const { trigger } = useFormContext();

  const schema = useMemo(() => getSchema(t), [i18n.language]);

  useEffect(() => {
    trigger();
  }, [i18n.language, trigger]);

  return schema;
};
