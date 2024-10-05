"use client";

import { forwardRef } from "react";
import { useLocalePathname } from "@/hooks/useLocalePathname";
import { LenisLink } from "../LenisLink";
import { LinkProps } from "next/link";

export const LocaleLink = forwardRef<
   HTMLAnchorElement,
   LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, ...props }, ref) => {
   const { localeHref } = useLocalePathname({ href });
   return (
      <LenisLink
         ref={ref}
         href={props.target === "_blank" ? href : localeHref}
         {...props}
      />
   );
});

LocaleLink.displayName = "LocaleLink";
