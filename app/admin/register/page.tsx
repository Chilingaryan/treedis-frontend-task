"use client";

import React from "react";
import { ObjectSchema } from "yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { RegisterForm } from "./form";
import { FullRegisterForm, getRegisterSchema } from "./schema";
import { Step, useRegistrationStore } from "@/stores/useRegistrationStore";

const RegisterPage = () => {
  const { t } = useTranslation();

  const step = useRegistrationStore((s) => s.step);
  const registerData = useRegistrationStore((s) => s.data);
  const setStep = useRegistrationStore((s) => s.setStep);
  const setData = useRegistrationStore((s) => s.setData);

  const schema = getRegisterSchema(t, step);

  const { control, handleSubmit } = useForm<Partial<FullRegisterForm>>({
    resolver: yupResolver(schema as ObjectSchema<Partial<FullRegisterForm>>),
  });

  const router = useRouter();

  const onSubmit = (step: Step) =>
    handleSubmit((data) => {
      if (step === 1) {
        setStep(2);
      }

      setData(data);
    });

  console.log(registerData);

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

      <RegisterForm step={step} onSubmit={onSubmit} control={control} />
    </Box>
  );
};

export default RegisterPage;
