import { useEffect } from "react";
import { useAppStore } from "@/app/[lang]/_context/useAppStore";

/** close menu when pressing the escape key */
export const useCloseOnEscapeKeyDown = () => {
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);
   const setIsMenuOpen = useAppStore(({ setIsMenuOpen }) => setIsMenuOpen);

   useEffect(() => {
      const handleKeydown = (e: KeyboardEvent) => {
         if (e.key === "Escape" && isMenuOpen) {
            setIsMenuOpen(false);
         }
      };
      window.addEventListener("keydown", handleKeydown);
      return () => {
         window.removeEventListener("keydown", handleKeydown);
      };
   }, [isMenuOpen, setIsMenuOpen]);
};
