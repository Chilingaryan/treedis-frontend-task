"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

import * as S from "./styles";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.LeftPanel>
        <Box maxWidth={400}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={48}
            height={48}
            // objectFit="contain"
          />
          <Typography variant="h3" fontWeight={700} mt={4}>
            {t("take")} <S.Highlight>{t("reality")}</S.Highlight>
            <br />
            {t("toTheNextLevel")}
          </Typography>
        </Box>
      </S.LeftPanel>

      <S.RightPanel>
        <S.Wrapper width="100%" maxWidth={400}>
          {children}
        </S.Wrapper>
      </S.RightPanel>
    </S.Container>
  );
};

export default AdminLayout;
