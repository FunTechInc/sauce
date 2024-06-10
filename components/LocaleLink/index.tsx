"use client";

import { useLenisLink } from "@/hooks/useLenis";
import { useLocalePathname } from "@/hooks/useLocalePathname";
import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";

export type LocaleLinkProps = { isExternal?: boolean } & LinkProps &
   React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(
   ({ children, href, isExternal, ...props }, ref) => {
      const { localeHref } = useLocalePathname({ href });
      const bild = useLenisLink({
         ...props,
         href: isExternal ? href : localeHref,
         target: isExternal ? "_blank" : "_self",
      });
      return (
         <Link {...bild} ref={ref}>
            {children}
         </Link>
      );
   }
);

LocaleLink.displayName = "LocaleLink";
