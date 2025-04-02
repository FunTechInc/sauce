"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { useLocalePathname } from "@/hooks/useLocalePathname";
import { LinkProps } from "next/link";

export const NavLink = (
   props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
   const { basePathname } = useLocalePathname();
   const href = props.href || "";
   const isCurretPage = basePathname === href;
   return (
      <LocaleLink {...props} aria-current={isCurretPage ? "page" : undefined} />
   );
};
