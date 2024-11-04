"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";

export default function LocaleSwitcher() {
   const pathName = usePathname();

   const redirectedPathName = (locale: Locale) => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
   };

   const getActiveLocale = (): Locale => {
      if (!pathName) return "ja";
      return pathName.split("/")[1] as Locale;
   };

   return (
      <div>
         <p>Locale:</p>
         <ul>
            {i18n.locales.map((locale) => {
               return (
                  <li key={locale} style={{ fontSize: "16px" }}>
                     <Link
                        href={redirectedPathName(locale)}
                        className={getActiveLocale() === locale ? "" : ""}>
                        {locale}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
