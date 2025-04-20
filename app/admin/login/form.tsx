import React from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";
import { FormInput } from "@/components/form/form-input";

interface LoginFormProps {
  onSubmit: any;
  control: any;
  errors: any;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  control,
  errors,
}) => {
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
        label="Password"
        type="password"
      />

      <Button type="submit" fullWidth variant="contained">
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
