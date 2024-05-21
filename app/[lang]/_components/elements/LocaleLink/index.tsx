"use client";

import { useLenisLink } from "@/app/[lang]/_hooks/useLenis";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type LocaleLinkProps = LinkProps &
   React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LocaleLink = ({ children, href, ...props }: LocaleLinkProps) => {
   const pathname = usePathname();
   const lang = pathname.split("/")[1];
   const localedHref = `/${lang}${href}`;

   const bild = useLenisLink({ ...props, href: localedHref });

   return <Link {...bild}>{children}</Link>;
};
