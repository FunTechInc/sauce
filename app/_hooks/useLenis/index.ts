import { useAppStore } from "@/app/_context/useAppStore";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { create } from "zustand";

type AppStore = {
   lenis: Lenis | null;
   setLenis: (value: Lenis) => void;
};

export const useLenis = create<AppStore>((set) => ({
   lenis: null,
   setLenis: (value: Lenis) => set({ lenis: value }),
}));

const lenis = new Lenis({
   duration: 1.2,
   easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
   smoothWheel: true,
   normalizeWheel: true,
   infinite: false,
   syncTouch: false,
});

export const useLenisRegister = () => {
   useLenis.setState({ lenis });

   useGSAP(
      () => {
         if (!lenis) {
            return;
         }
         gsap.registerPlugin(ScrollTrigger);
         ScrollTrigger.refresh();
         lenis.on("scroll", ScrollTrigger.update);
      },
      { dependencies: [lenis] }
   );

   const isModalOpen = useAppStore(({ isModalOpen }) => isModalOpen);
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);

   useEffect(() => {
      if (isModalOpen || isMenuOpen) {
         lenis.stop();
      } else {
         lenis.start();
      }
   }, [isModalOpen, isMenuOpen]);

   return lenis;
};
