import { usePathname } from "next/navigation";

export const useLocalePathname = ({ href = "" }: { href?: string } = {}) => {
   const pathname = usePathname();
   const lang = pathname.split("/")[1];
   const localeHref = `/${lang}${href}`;
   const basePathname = "/" + pathname.split("/").slice(2).join("/");
   return { localeHref, pathname, lang, basePathname };
};
