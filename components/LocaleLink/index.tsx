"use client";

import { useLenisLink } from "@/hooks/useLenis";
import { useLocaleHref } from "@/hooks/useLocaleHref";
import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";

export type LocaleLinkProps = LinkProps &
   React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(
   ({ children, href, ...props }, ref) => {
      const { localeHref } = useLocaleHref(href);
      const bild = useLenisLink({ ...props, href: localeHref });

      return (
         <Link {...bild} ref={ref}>
            {children}
         </Link>
      );
   }
);

LocaleLink.displayName = "LocaleLink";
