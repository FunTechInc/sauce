import { usePathname } from "next/navigation";

export const useLocaleHref = (href: string) => {
   const pathname = usePathname();
   const lang = pathname.split("/")[1];
   const localeHref = `/${lang}${href}`;
   return { localeHref, pathname, lang };
};
