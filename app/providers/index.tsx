"use client";

import React from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@/providers/theme";

import i18n from "@/translations/i18n";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nextProvider>
  );
};
