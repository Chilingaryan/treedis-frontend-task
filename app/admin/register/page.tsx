"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Typography, Box, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { getRegisterSchema } from "./schema";
import { RegisterForm } from "./form";
// import { RegisterForm } from "./form";

const RegisterPage = () => {
  const { t } = useTranslation();
  const schema = getRegisterSchema(t, 1);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (step: 1 | 2) =>
    handleSubmit((data: any) => {
      console.log(step, data);
    });

  const router = useRouter();

  return (
    <Box width="100%" maxWidth={450}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        {t("register")}
      </Typography>

      <Button onClick={() => router.push("/admin/login")}>
        <ArrowBackIcon />
      </Button>

      <RegisterForm
        step={1}
        onSubmit={onSubmit}
        control={control}
        errors={errors}
      />
    </Box>
  );
};

export default RegisterPage;
