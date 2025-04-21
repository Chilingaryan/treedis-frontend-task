import React from "react";
import { Control } from "react-hook-form";
import { Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { FormStep1 } from "./form.step-one";
import { FormStep2 } from "./form.step-two";
import { Step } from "@/stores/useRegistrationStore";
import { FullRegisterForm, Step1Fields, Step2Fields } from "./schema";

interface RegisterFormProps {
  step: Step;
  control: Control<Partial<FullRegisterForm>>;
  onSubmit: (step: Step) => React.FormEventHandler<HTMLFormElement>;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  control,
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
        <FormStep1 step={step} control={control as Control<Step1Fields>} />
        <FormStep2 step={step} control={control as Control<Step2Fields>} />
      </Box>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={{ marginTop: "10px" }}
      >
        {t(step === 1 ? "next" : "register")}
      </Button>
    </form>
  );
};
