import * as yup from "yup";
import { InferType } from "yup";
import { TFunction } from "i18next";
import { Step } from "@/stores/useRegistrationStore";
import { passwordSchema } from "@/utils/common-schemes";

export const getRegisterSchema = (t: TFunction, step: Step) =>
  step === 1 ? step1Schema(t) : step2Schema(t);

const step1Schema = (t: TFunction) =>
  yup.object({
    firstName: yup
      .string()
      .max(30, t("validation.max30"))
      .required(t("validation.required")),
    lastName: yup
      .string()
      .max(30, t("validation.max30"))
      .required(t("validation.required")),
    email: yup
      .string()
      .email(t("validation.invalidEmail"))
      .required(t("validation.emailRequired")),
    password: passwordSchema(t),
    confirmPassword: yup
      .string()
      .required(t("validation.confirmPassword"))
      .oneOf([yup.ref("password")], t("validation.passwordsMustMatch")),
  });

const step2Schema = (t: TFunction) =>
  yup.object({
    email: yup
      .string()
      .email(t("validation.invalidEmail"))
      .required(t("validation.emailRequired")),

    company: yup.string().required(t("validation.required")),
    phone: yup.string().required(t("validation.required")),
    country: yup.string().required(t("validation.required")),
    heardFrom: yup.string().required(t("validation.required")),
    isProvider: yup.string().required(t("validation.required")),

    spaces: yup.string().when("isProvider", {
      is: "true",
      then: (schema) => schema.required(t("validation.required")),
      otherwise: (schema) => schema.notRequired(),
    }),

    industry: yup.string().when("isProvider", {
      is: (val: string) => val !== "true",
      then: (schema) => schema.required(t("validation.required")),
      otherwise: (schema) => schema.notRequired(),
    }),

    employees: yup.string().required(t("validation.required")),
    jobDescription: yup.string().required(t("validation.required")),
    website: yup.string().required(t("validation.required")),

    subscribe: yup.boolean(),

    terms: yup.boolean().oneOf([true], t("validation.termsRequired")),
  });

export type Step1Fields = InferType<ReturnType<typeof step1Schema>>;
export type Step2Fields = InferType<ReturnType<typeof step2Schema>>;

export type FullRegisterForm = Step1Fields & Step2Fields;
