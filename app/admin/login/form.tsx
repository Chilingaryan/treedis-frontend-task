import React from "react";
import { Control } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import { FormInput } from "@/components/form/form-input";

type LoginFormFields = {
  email: string;
  password: string;
};

interface LoginFormProps {
  control: Control<LoginFormFields>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, control }) => {
  const { t } = useTranslation();

  const router = useRouter();

  const handleCreateAccount = () => {
    router.push("/admin/register");
  };

  return (
    <form onSubmit={onSubmit}>
      <FormInput control={control} label={t("emailAddress")} name="email" />

      <FormInput
        name="password"
        control={control}
        label={t("password")}
        type="password"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ marginTop: "20px" }}
      >
        {t("login")}
      </Button>

      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="text" sx={{ textTransform: "none" }}>
          {t("forgotPassword")}
        </Button>
        <Button variant="text" onClick={handleCreateAccount}>
          {t("createAccount")}
        </Button>
      </Box>
    </form>
  );
};
