"use client";

import { useAppStore } from "@/app/[lang]/_context/useAppStore";
import s from "./menu.module.scss";

export const Menu = () => {
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);
   return (
      <>
         <button
            onClick={() => {
               useAppStore.setState({ isMenuOpen: !isMenuOpen });
            }}
            className={`${s.button} ${isMenuOpen ? s.active : ""}`}>
            {isMenuOpen ? "close" : "menu open"}
         </button>
         <div className={`${s.inner} ${isMenuOpen ? "" : s.hidden}`}>menu</div>
      </>
   );
};
