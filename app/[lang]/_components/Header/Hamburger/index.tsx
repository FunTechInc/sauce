"use client";

import { useAppStore } from "@/app/[lang]/_context/useAppStore";
import { useEffect, useRef } from "react";
import { useCloseOnEscapeKeyDown } from "./useCloseOnEscapeKeyDown";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n-config";
import { FocusTrap } from "@mui/base";
import s from "./index.module.scss";

const LabelText = {
   open: {
      ja: "メニューを開く",
      en: "Open menu",
   },
   close: {
      ja: "メニューを閉じる",
      en: "Close menu",
   },
};

export const Hamburger = ({
   children,
   lang,
}: {
   children: React.ReactNode;
   lang: Locale;
}) => {
   const { isMenuOpen, setIsMenuOpen } = useAppStore(
      ({ isMenuOpen, setIsMenuOpen }) => ({ isMenuOpen, setIsMenuOpen })
   );

   useCloseOnEscapeKeyDown();

   const buttonRef = useRef<HTMLButtonElement>(null);

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
            <button
               ref={buttonRef}
               onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
               }}
               className={s.button}
               aria-label={
                  isMenuOpen ? LabelText.close[lang] : LabelText.open[lang]
               }
               aria-haspopup={!isMenuOpen}
               aria-expanded={isMenuOpen}>
               <span></span>
               <span></span>
            </button>
            <div
               className={s.overlay}
               aria-hidden={!isMenuOpen}
               onClick={() => {
                  setIsMenuOpen(false);
               }}></div>
            <nav aria-hidden={!isMenuOpen}>{children}</nav>
         </div>
      </FocusTrap>
   );
};
