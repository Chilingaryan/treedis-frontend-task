import * as yup from "yup";
import { TFunction } from "i18next";

export const passwordSchema = (t: TFunction) =>
  yup
    .string()
    .required(t("validation.passwordRequired"))
    .min(8, t("validation.passwordTooShort"))
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      t("validation.passwordComplexity")
    );
