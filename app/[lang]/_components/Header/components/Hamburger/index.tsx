"use client";

import { useAppStore } from "@/app/[lang]/_context/useAppStore";
import { useRef } from "react";
import { FocusTrap } from "./FocusTrap";
import { useCloseOnEscapeKeyDown } from "./useCloseOnEscapeKeyDown";
import s from "./index.module.scss";

export const Hamburger = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className?: string;
}) => {
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
            <span></span>
            <span></span>
         </button>
         <nav className={className ? className : ""} aria-hidden={!isMenuOpen}>
            {children}
            <FocusTrap focusTarget={buttonRef} />
         </nav>
      </>
   );
};
