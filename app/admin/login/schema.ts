import * as yup from "yup";
import { TFunction } from "i18next";
import { passwordSchema } from "@/utils/common-schemes";

export const getLoginSchema = (t: TFunction) =>
  yup.object({
    email: yup
      .string()
      .email(t("validation.invalidEmail"))
      .required(t("validation.emailRequired")),
    password: passwordSchema(t),
  });

export type LoginFields = yup.InferType<ReturnType<typeof getLoginSchema>>;
