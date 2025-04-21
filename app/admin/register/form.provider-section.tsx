import React from "react";
import { Control, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  Radio,
  RadioGroup,
  Typography,
  FormControl,
  FormHelperText,
  FormControlLabel,
} from "@mui/material";

import { Step2Fields } from "./schema";
import { FormInput, FormSelect } from "@/components/form";
import { employees, industries, spaces } from "./mock-data";

interface FormProviderSectionProps {
  control: Control<Step2Fields>;
}

export const FormProviderSection: React.FC<FormProviderSectionProps> = ({
  control,
}) => {
  const { t } = useTranslation();

  return (
    <Controller
      name="isProvider"
      control={control}
      defaultValue=""
      render={({ field, formState: { errors } }) => (
        <>
          <FormControl
            component="fieldset"
            margin="normal"
            error={!!errors.isProvider}
          >
            <Typography mb={1}>{t("isMatterportProvider")}</Typography>
            <RadioGroup row {...field}>
              <FormControlLabel
                value={true}
                control={<Radio />}
                label={t("yes")}
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label={t("no")}
              />
            </RadioGroup>
            <FormHelperText>{errors.isProvider?.message}</FormHelperText>
          </FormControl>

          {field.value === "true" && (
            <FormSelect
              control={control}
              label={t("numberOfSpaces")}
              options={spaces}
              name="spaces"
            />
          )}

          {field.value === "false" && (
            <FormSelect
              control={control}
              label={t("industry")}
              options={industries}
              name="industry"
            />
          )}

          {!!field.value && (
            <>
              <FormSelect
                control={control}
                label={t("numberOfEmployees")}
                options={employees}
                name="employees"
              />
              <FormInput
                control={control}
                label={t("jobDescription")}
                name="jobDescription"
              />

              <FormInput
                control={control}
                label={t("website")}
                name="website"
              />
            </>
          )}
        </>
      )}
    />
  );
};
