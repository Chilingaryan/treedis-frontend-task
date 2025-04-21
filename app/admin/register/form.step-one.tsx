import React from "react";
import { Control } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Step1Fields } from "./schema";
import { FormInput } from "@/components/form";
import { Step } from "@/stores/useRegistrationStore";

interface FormStep1Props {
  step: Step;
  control: Control<Step1Fields>;
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
