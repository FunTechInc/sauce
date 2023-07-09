"use client";

import s from "./menu.module.scss";
import { useAppStore } from "@/app/_context/useAppStore";

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
