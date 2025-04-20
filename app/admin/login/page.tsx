"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginForm } from "./form";
import { getLoginSchema } from "./schema";
import { useTranslatedSchema } from "@/hooks/useTranslatedSchema";

const LoginPage = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(getLoginSchema(t)) });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box width="100%" maxWidth={450}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        {t("welcome")}
        <br />
        {t("loginToContinue")}
      </Typography>

      <LoginForm
        onSubmit={handleSubmit(onSubmit)}
        control={control}
        errors={errors}
      />
    </Box>
  );
};

export default LoginPage;
