"use client";

import { useAppStore } from "@/app/[lang]/_context/useAppStore";
import { useEffect } from "react";
import { useCloseOnEscapeKeyDown } from "./useCloseOnEscapeKeyDown";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n-config";
import { FocusTrap } from "@mui/base";
import { RouteNavLink } from "@/components/RouteNavLink";
import { Button } from "./Button";
import s from "./index.module.scss";

export const Hamburger = ({ lang }: { lang: Locale }) => {
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);
   const setIsMenuOpen = useAppStore(({ setIsMenuOpen }) => setIsMenuOpen);

   useCloseOnEscapeKeyDown();

   // Close the menu when the route changes
   const pathname = usePathname();
   useEffect(() => {
      return () => {
         setIsMenuOpen(false);
      };
   }, [pathname, setIsMenuOpen]);

   return (
      <FocusTrap open={isMenuOpen}>
         <div tabIndex={-1}>
            <Button lang={lang} />
            <div
               className={s.overlay}
               aria-hidden={!isMenuOpen}
               onClick={() => {
                  setIsMenuOpen(false);
               }}></div>
            <nav className={s.menuContainer} aria-hidden={!isMenuOpen}>
               <RouteNavLink href={"/sample"}>sample</RouteNavLink>
            </nav>
         </div>
      </FocusTrap>
   );
};
