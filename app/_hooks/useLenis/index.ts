import { useAppStore } from "@/app/_context/useAppStore";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { create } from "zustand";

type AppStore = {
   lenis: Lenis | null;
   setLenis: (value: Lenis) => void;
};

export const useLenis = create<AppStore>((set) => ({
   lenis: null,
   setLenis: (value: Lenis) => set({ lenis: value }),
}));

export const useLenisRegister = () => {
   const lenis = useRef<Lenis | null>(null);
   const setLenis = useLenis((state) => state.setLenis);

   useEffect(() => {
      lenis.current = new Lenis({
         duration: 1.2,
         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         smoothWheel: true,
         normalizeWheel: true,
         infinite: false,
         syncTouch: false,
      });

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
      lenis.current.on("scroll", ScrollTrigger.update);

      setLenis(lenis.current);
   }, [setLenis]);

   const isModalOpen = useAppStore(({ isModalOpen }) => isModalOpen);
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);

   useEffect(() => {
      if (isModalOpen || isMenuOpen) {
         lenis.current?.stop();
      } else {
         lenis.current?.start();
      }
   }, [isModalOpen, isMenuOpen]);

   return lenis;
};
