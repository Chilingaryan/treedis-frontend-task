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
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { FormStep1 } from "./form.step_1";
import { FormStep2 } from "./form.step_2";
import { Step } from "@/stores/useRegistrationStore";

interface RegisterFormProps {
  onSubmit: any;
  step: Step;
  control: any;
  errors: any;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  control,
  errors,
  step,
}) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit(step)} style={{ padding: "0 10px" }}>
      <Box
        sx={{
          maxHeight: "60vh",
          overflow: "auto",
        }}
      >
        <FormStep1 step={step} control={control} />
        <FormStep2 step={step} control={control} errors={errors} />
      </Box>
      <Button type="submit" fullWidth variant="contained" sx={{ marginTop: 1 }}>
        {t(step === 1 ? "next" : "register")}
      </Button>
    </form>
  );
};
