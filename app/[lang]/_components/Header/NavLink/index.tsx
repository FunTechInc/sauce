"use client";

import { LocaleLink, LocaleLinkProps } from "@/components/LocaleLink";
import { useLocalePathname } from "@/hooks/useLocalePathname";

export const NavLink = (props: LocaleLinkProps) => {
   const { basePathname } = useLocalePathname();
   const href = props.href || "";
   let isCurretPage = basePathname === href;
   return (
      <LocaleLink {...props} aria-current={isCurretPage ? "page" : undefined} />
   );
};
