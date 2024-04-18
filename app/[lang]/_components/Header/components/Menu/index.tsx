"use client";

import { useAppStore } from "@/app/[lang]/_context/useAppStore";
import { useRef } from "react";
import { FocusTrap } from "./FocusTrap";
import { useCloseOnEscapeKeyDown } from "./useCloseOnEscapeKeyDown";
import s from "./menu.module.scss";

export const Menu = () => {
   const { isMenuOpen, setIsMenuOpen } = useAppStore(
      ({ isMenuOpen, setIsMenuOpen }) => ({ isMenuOpen, setIsMenuOpen })
   );

   useCloseOnEscapeKeyDown();

   const buttonRef = useRef<HTMLButtonElement>(null);
   return (
      <>
         <button
            ref={buttonRef}
            onClick={() => {
               setIsMenuOpen(!isMenuOpen);
            }}
            className={s.button}
            aria-expanded={isMenuOpen}>
            {isMenuOpen ? "close" : "menu open"}
         </button>
         <nav
            className={`${s.nav} ${isMenuOpen ? "" : s.hidden}`}
            area-hidden={`${!isMenuOpen}`}>
            <button>nav0</button>
            <button>nav1</button>
            <button>nav2</button>
            <FocusTrap focusTarget={buttonRef} />
         </nav>
      </>
   );
};
