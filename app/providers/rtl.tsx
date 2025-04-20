import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import React, { useEffect, useState } from "react";
import { isRtl } from "@/utils/language";
import i18n from "@/translations/i18n";

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

  // Todo: dont forget to clean up the listener
  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      setCache(createRtlCache(isRtl(lng)));
    });
  }, []);

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
