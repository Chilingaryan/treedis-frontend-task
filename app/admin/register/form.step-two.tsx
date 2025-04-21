import React from "react";
import { Control, Controller, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  Radio,
  Checkbox,
  RadioGroup,
  Typography,
  FormControl,
  FormHelperText,
  FormControlLabel,
} from "@mui/material";

import {
  FormInput,
  FormSelect,
  FormCheckbox,
  FormPhoneInput,
} from "@/components/form";
import { Step2Fields } from "./schema";
import { Step } from "@/stores/useRegistrationStore";
import { countries, industries, sources, spaces } from "./mock-data";
import { FormProviderSection } from "./form.provider-section";

interface FormStep2Props {
  step: Step;
  control: Control<Step2Fields>;
}

export const FormStep2: React.FC<FormStep2Props> = ({ step, control }) => {
  const { t } = useTranslation();

  if (step !== 2) return null;

  return (
    <>
      <FormInput control={control} label={t("company")} name="company" />

      <FormPhoneInput control={control} label={t("phone")} name="phone" />

      <FormSelect
        control={control}
        label={t("countryRegion")}
        options={countries}
        name="country"
      />

      <FormSelect
        control={control}
        label={t("howYouHeard")}
        options={sources}
        name="heardFrom"
      />

      <FormProviderSection control={control} />

      <Controller
        name="subscribe"
        control={control}
        defaultValue={true}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label={t("subscribeNewsletter")}
          />
        )}
      />

      <FormCheckbox
        name="terms"
        control={control}
        label={
          <span
            dangerouslySetInnerHTML={{
              __html: t("termsAndPolicies", {
                terms: `<a href="#" style="color:#1a73e8;text-decoration:underline">Terms of Use</a>`,
                cookies: `<a href="#" style="color:#1a73e8;text-decoration:underline">Cookie Policy</a>`,
                privacy: `<a href="#" style="color:#1a73e8;text-decoration:underline">Privacy Policy</a>`,
              }),
            }}
          />
        }
      />
    </>
  );
};
