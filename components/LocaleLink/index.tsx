"use client";

import { forwardRef } from "react";
import { useLocalePathname } from "@/hooks/useLocalePathname";
import { LenisLink } from "../Lenis";
import Link, { LinkProps } from "next/link";

export type LocaleLinkProps = LinkProps &
   React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      lenis?: boolean;
   };

export const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(
   ({ href, lenis = true, ...props }, ref) => {
      const { getLocalizedHref } = useLocalePathname();
      const Component = lenis ? LenisLink : Link;
      return (
         <Component
            ref={ref}
            href={props.target === "_blank" ? href : getLocalizedHref(href)}
            {...props}
         />
      );
   }
);

LocaleLink.displayName = "LocaleLink";
