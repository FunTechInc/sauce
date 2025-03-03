"use client";

import { forwardRef } from "react";
import { useLocalePathname } from "@/hooks/useLocalePathname";
import { LenisLink } from "../Lenis";
import { LinkProps } from "next/link";

export const LocaleLink = forwardRef<
   HTMLAnchorElement,
   LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ locale, ...props }, ref) => {
   const { activeLocale } = useLocalePathname();
   return <LenisLink ref={ref} locale={locale ?? activeLocale} {...props} />;
});

LocaleLink.displayName = "LocaleLink";
