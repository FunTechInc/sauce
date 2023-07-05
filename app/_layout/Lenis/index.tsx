"use client";

import { useEffect } from "react";
import { Lenis as MyLenis, useLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useAppStore } from "@/app/_context/useAppStore";

const option = {
   duration: 1.2,
   easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
   orientation: "vertical",
   gestureOrientation: "vertical",
   smoothWheel: true,
   wheelMultiplier: 1,
   smoothTouch: false,
   touchMultiplier: 2,
   infinite: false,
};

export const Lenis = ({ children }: { children: React.ReactNode }) => {
   /*===============================================
	integrate ScrollTrigger
	===============================================*/
   const lenis = useLenis(ScrollTrigger.update);
   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.ticker.lagSmoothing(0);
      gsap.ticker.add((time) => {
         lenis?.raf(time * 1000);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   useEffect(() => {
      ScrollTrigger.refresh();
   }, [lenis]);

   /*===============================================
	stop lenis
	===============================================*/
   const isModalOpen = useAppStore(({ isModalOpen }) => isModalOpen);
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);
   useEffect(() => {
      if (isModalOpen || isMenuOpen) {
         lenis?.stop();
      } else {
         lenis?.start();
      }
   }, [lenis, isModalOpen, isMenuOpen]);
   /*===============================================
	hash
	===============================================*/

   return (
      <MyLenis root options={{ ...option }}>
         {children}
      </MyLenis>
   );
};
