"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Typography, Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginForm } from "./form";
import { LoginFields, getLoginSchema } from "./schema";

const LoginPage = () => {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(getLoginSchema(t)),
  });

  const onSubmit = (data: LoginFields) => {
    console.log(data);
  };

  return (
    <Box width="100%" maxWidth={450}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        {t("welcome")}
        <br />
        {t("loginToContinue")}
      </Typography>

      <LoginForm onSubmit={handleSubmit(onSubmit)} control={control} />
    </Box>
  );
};

export default LoginPage;
