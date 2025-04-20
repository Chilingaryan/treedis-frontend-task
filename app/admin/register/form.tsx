import React from "react";

import {
  IconButton,
  InputAdornment,
  FormHelperText,
  FormControlLabel,
  RadioGroup,
  Typography,
  Radio,
  Checkbox,
  FormControl,
  Button,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { FormCheckbox } from "@/components/form/form-checkbox";
import { FormInput } from "@/components/form/form-input";
import { FormPhoneInput } from "@/components/form/form-phoneInput";
import { FormSelect } from "@/components/form/form-select";

interface RegisterFormProps {
  onSubmit: any;
  control: any;
  errors: any;
  step: 1 | 2;
}

const countries = ["United States", "Canada", "Germany", "Armenia"];
const sources = ["Google", "Friend", "Social Media", "Other"];

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  control,
  errors,
  step,
}) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit(step)}>
      {step === 1 && (
        <>
          <FormInput
            control={control}
            label={t("firstName")}
            name="firstName"
          />

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
      )}

      {step === 2 && (
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
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <FormHelperText>{errors.isProvider?.message}</FormHelperText>
              </FormControl>
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
      )}

      <Button type="submit" fullWidth variant="contained">
        {step === 1 ? t("register") : t("next")}
      </Button>
    </form>
  );
};
