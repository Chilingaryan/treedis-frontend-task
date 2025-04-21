import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";

import i18n from "@/translations/i18n";
import { isRtl } from "@/utils/language";

interface RtlProviderProps {
  children: React.ReactNode;
}

const createRtlCache = (rtl: boolean) => {
  return createCache({
    key: `mui${rtl ? "rtl" : "ltr"}`,
    stylisPlugins: rtl ? [prefixer, rtlPlugin] : [],
  });
};

export const RtlProvider: React.FC<RtlProviderProps> = ({ children }) => {
  const [cache, setCache] = useState(createRtlCache(isRtl(i18n.language)));

  useEffect(() => {
    const onLanguageChanged = (lng: string) => {
      setCache(createRtlCache(isRtl(lng)));
    };

    i18n.on("languageChanged", onLanguageChanged);

    return () => {
      i18n.off("languageChanged", onLanguageChanged);
    };
  }, []);

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
