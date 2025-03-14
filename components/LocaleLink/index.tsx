"use client";

import { forwardRef } from "react";
import { useLocalePathname } from "@/hooks/useLocalePathname";
import { LenisLink } from "../Lenis";
import { LinkProps } from "next/link";

export const LocaleLink = forwardRef<
   HTMLAnchorElement,
   LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, ...props }, ref) => {
   const { getLocalizedHref } = useLocalePathname();
   return (
      <LenisLink
         ref={ref}
         href={props.target === "_blank" ? href : getLocalizedHref(href)}
         {...props}
      />
   );
});

LocaleLink.displayName = "LocaleLink";
