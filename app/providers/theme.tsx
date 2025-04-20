import { theme } from "@/theme";
import React, { useEffect, useState } from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import i18n from "@/translations/i18n";
import { isRtl } from "@/utils/language";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [dir, setDir] = useState<"rtl" | "ltr">("ltr");

  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      const _dir = isRtl(lng) ? "rtl" : "ltr";
      document.body.dir = _dir;
      setDir(_dir);
    });
  }, []);

  return <MuiThemeProvider theme={theme(dir)}>{children}</MuiThemeProvider>;
};
