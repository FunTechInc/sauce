"use client";

import { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { useLenisLink } from "@/hooks/useLenis";

export const LenisLink = forwardRef<
   HTMLAnchorElement,
   LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, ...props }, ref) => {
   const bild = useLenisLink(props);
   return (
      <Link ref={ref} {...bild}>
         {children}
      </Link>
   );
});

LenisLink.displayName = "LenisLink";
