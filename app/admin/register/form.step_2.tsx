import React from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import { FormInput } from "@/components/form/form-input";
import { FormPhoneInput } from "@/components/form/form-phoneInput";
import { FormSelect } from "@/components/form/form-select";
import { FormCheckbox } from "@/components/form/form-checkbox";
import { Step } from "@/stores/useRegistrationStore";

interface FormStep1Props {
  step: Step;
  control: any;
  errors: any;
}

const countries = ["United States", "Canada", "Germany", "Armenia"];
const sources = ["Google", "Friend", "Social Media", "Other"];
const spaces = ["test"];
const industries = ["test"];
const employees = ["test"];

export const FormStep2: React.FC<FormStep1Props> = ({
  step,
  control,
  errors,
}) => {
  const { t } = useTranslation();

  if (step !== 2) return null;

  return (
    <>
      <FormInput control={control} label={t("company")} name="company" />

      <FormPhoneInput control={control} label={t("phone")} name="phone" />

      <FormSelect
        control={control}
        label={t("Country/Region")}
        options={countries}
        name="country"
      />

      <FormSelect
        control={control}
        label={t("howYouHeardAboutUs")}
        options={sources}
        name="heardFrom"
      />

      <Controller
        name="isProvider"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <FormControl
              component="fieldset"
              margin="normal"
              error={!!errors.isProvider}
            >
              <Typography mb={1}>
                Are you a Matterport service provider?
              </Typography>
              <RadioGroup row {...field}>
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="No"
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

      <Controller
        name="subscribe"
        control={control}
        defaultValue={true}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="Subscribe to our newsletter"
          />
        )}
      />

      <FormCheckbox
        name="terms"
        control={control}
        label={
          <span>
            By registering, I agree to Treedis{" "}
            <a
              href="#"
              style={{ color: "#1a73e8", textDecoration: "underline" }}
            >
              Terms of Use
            </a>
            ,{" "}
            <a
              href="#"
              style={{ color: "#1a73e8", textDecoration: "underline" }}
            >
              Cookie Policy
            </a>{" "}
            and{" "}
            <a
              href="#"
              style={{ color: "#1a73e8", textDecoration: "underline" }}
            >
              Privacy Policy
            </a>
            .
          </span>
        }
      />
    </>
  );
};
