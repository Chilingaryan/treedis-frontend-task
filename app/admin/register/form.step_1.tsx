import { FormInput } from "@/components/form/form-input";
import { Step } from "@/stores/useRegistrationStore";
import React from "react";
import { useTranslation } from "react-i18next";

interface FormStep1Props {
  step: Step;
  control: any;
}

export const FormStep1: React.FC<FormStep1Props> = ({ step, control }) => {
  const { t } = useTranslation();

  if (step !== 1) return null;

  return (
    <>
      <FormInput control={control} label={t("firstName")} name="firstName" />

      <FormInput control={control} label={t("lastName")} name="lastName" />

      <FormInput control={control} label={t("emailAddress")} name="email" />

      <FormInput
        name="password"
        control={control}
        label={t("password")}
        type="password"
      />

      <FormInput
        name="confirmPassword"
        control={control}
        label={t("confirmPassword")}
        type="password"
      />
    </>
  );
};
