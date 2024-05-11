import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { create } from "zustand";
import { useAppStore } from "@/app/[lang]/_context/useAppStore";

type LenisStore = {
   lenis: Lenis | null;
   setLenis: (value: Lenis) => void;
};

export const useLenis = create<LenisStore>((set) => ({
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
         // Virtual DOM on mobile is a bad idea, but if you must do it, the following is comfortable
         // syncTouch: true,
         // syncTouchLerp: 0.12,
         // touchInertiaMultiplier: 16,
         // touchMultiplier: 0.64,
      });
      setLenis(lenis.current);

      // integrate with GSAP
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
      lenis.current.on("scroll", ScrollTrigger.update);

      function update(time: number) {
         lenis.current?.raf(time * 1000);
      }
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      return () => {
         lenis.current?.destroy();
         gsap.ticker.remove(update);
      };
   }, [setLenis]);

   const isModalOpen = useAppStore(({ isModalOpen }) => isModalOpen);
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);
   if (isModalOpen || isMenuOpen) {
      lenis.current?.stop();
   } else {
      lenis.current?.start();
   }

   return lenis;
};
