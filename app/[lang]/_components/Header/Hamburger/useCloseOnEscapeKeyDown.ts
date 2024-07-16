import { useEffect } from "react";
import { useAppStore } from "@/app/[lang]/_context/useAppStore";

/** close menu when pressing the escape key */
export const useCloseOnEscapeKeyDown = () => {
   const { isMenuOpen, setIsMenuOpen } = useAppStore(
      ({ isMenuOpen, setIsMenuOpen }) => ({ isMenuOpen, setIsMenuOpen })
   );

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
