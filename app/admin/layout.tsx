"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

import * as S from "./styles";
import { LanguageSwitcher } from "@/components/language-switcher/language-switcher";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.BrandPanel>
        <Box maxWidth={400}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            style={{ objectFit: "contain" }}
          />
          <Typography variant="h3" fontWeight={700} mt={4}>
            {t("take")} <S.Highlight>{t("reality")}</S.Highlight>
            <br />
            {t("toTheNextLevel")}
          </Typography>
        </Box>
      </S.BrandPanel>

      <S.ContentWrapper>{children}</S.ContentWrapper>

      <LanguageSwitcher />
    </S.Container>
  );
};

export default AdminLayout;
