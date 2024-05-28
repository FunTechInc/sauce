"use client";

import { useAppStore } from "@/app/[lang]/_context/useAppStore";
import { useEffect, useRef } from "react";
import { FocusTrap } from "./FocusTrap";
import { useCloseOnEscapeKeyDown } from "./useCloseOnEscapeKeyDown";
import { usePathname } from "next/navigation";
import s from "./index.module.scss";

export const Hamburger = ({ children }: { children: React.ReactNode }) => {
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
      <div>
         <button
            ref={buttonRef}
            onClick={() => {
               setIsMenuOpen(!isMenuOpen);
            }}
            className={s.button}
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
         <nav aria-hidden={!isMenuOpen}>
            {children}
            <FocusTrap focusTarget={buttonRef} />
         </nav>
      </div>
   );
};
