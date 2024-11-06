import { type Locale } from "@/i18n-config";
import { type Url } from "next/dist/shared/lib/router/router";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

export const useLocalePathname = () => {
   const pathname = usePathname();
   const segments = pathname.split("/");
   const activeLocale = segments[1] as Locale;
   const basePathname = `/${segments.slice(2).join("/")}`;

   const getLocalizedHref = useCallback(
      (href: Url) => `/${activeLocale}${href}`,
      [activeLocale]
   );

   const getRedirectedPathname = useCallback(
      (locale: Locale) => {
         const _segments = [...segments];
         _segments[1] = locale;
         return _segments.join("/");
      },
      [segments]
   );

   return {
      pathname,
      activeLocale,
      basePathname,
      getLocalizedHref,
      getRedirectedPathname,
   };
};
