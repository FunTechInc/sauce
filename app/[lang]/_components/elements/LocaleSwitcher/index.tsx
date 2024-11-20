"use client";

import Link from "next/link";
import { i18n } from "@/i18n-config";
import { useLocalePathname } from "@/hooks/useLocalePathname";

export default function LocaleSwitcher() {
   const { getRedirectedPathname, activeLocale } = useLocalePathname();

   return (
      <div
         style={{
            display: "flex",
            gap: "16px",
         }}>
         <p>Locale:</p>
         <ul
            style={{
               display: "flex",
               gap: "8px",
            }}>
            {i18n.locales.map((locale) => {
               return (
                  <li key={locale} style={{ fontSize: "16px" }}>
                     <Link
                        href={getRedirectedPathname(locale)}
                        className={activeLocale === locale ? "" : ""}>
                        {locale}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
