"use client";

import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/translations/i18n";

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
