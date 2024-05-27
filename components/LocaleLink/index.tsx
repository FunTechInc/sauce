"use client";

import { useLenisLink } from "@/hooks/useLenis";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

export type LocaleLinkProps = LinkProps &
   React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(
   ({ children, href, ...props }, ref) => {
      const pathname = usePathname();
      const lang = pathname.split("/")[1];
      const localedHref = `/${lang}${href}`;

      const bild = useLenisLink({ ...props, href: localedHref });

      return (
         <Link {...bild} ref={ref}>
            {children}
         </Link>
      );
   }
);

LocaleLink.displayName = "LocaleLink";
