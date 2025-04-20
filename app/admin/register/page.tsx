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
import { Step, useRegistrationStore } from "@/stores/useRegistrationStore";
// import { RegisterForm } from "./form";

const RegisterPage = () => {
  const { t } = useTranslation();

  const step = useRegistrationStore((s) => s.step);
  const setStep = useRegistrationStore((s) => s.setStep);
  const setData = useRegistrationStore((s) => s.setData);

  const schema = getRegisterSchema(t, step);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const router = useRouter();

  const onSubmit = (step: Step) =>
    handleSubmit((data: any) => {
      console.log(data);
      setStep(2);
      setData(data);
    });

  const handleGoBack = () => {
    switch (step) {
      case 1: {
        router.push("/admin/login");
        break;
      }
      case 2: {
        setStep(1);
        break;
      }
    }
  };

  return (
    <Box width="100%" maxWidth={450}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        {t(step === 1 ? "register" : "almostThere")}
      </Typography>

      <Button onClick={handleGoBack}>
        <ArrowBackIcon />
      </Button>

      <RegisterForm
        step={step}
        onSubmit={onSubmit}
        control={control}
        errors={errors}
      />
    </Box>
  );
};

export default RegisterPage;
