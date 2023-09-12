"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useAppStore } from "@/app/_context/useAppStore";
import { useWindowResizeObserver } from "@funtech-inc/spice";

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
	integrate GSAP
	===============================================*/
   // GSAP ScrollTrigger
   const lenis = useLenis();
   useEffect(() => {
      if (!lenis) {
         return;
      }
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
      lenis?.on("scroll", ScrollTrigger.update);
   }, [lenis]);

   // GSAP
   const lenisRef = useRef<any>();
   useEffect(() => {
      function update(time: number) {
         lenisRef.current?.raf(time * 1000);
      }
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);
      return () => {
         gsap.ticker.remove(update);
      };
   }, []);

   /*===============================================
	resize
	===============================================*/
   useWindowResizeObserver({
      callback: () => {
         if (!lenisRef.current) {
            return;
         }
         lenisRef.current?.resize();
      },
      debounce: 50,
      dependencies: [],
   });

   /*===============================================
	stop lenis
	===============================================*/
   const isModalOpen = useAppStore(({ isModalOpen }) => isModalOpen);
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);
   useEffect(() => {
      if (isModalOpen || isMenuOpen) {
         lenisRef.current?.stop();
      } else {
         lenisRef.current?.start();
      }
   }, [isModalOpen, isMenuOpen]);

   return (
      <ReactLenis root ref={lenisRef} autoRaf={false} option={option}>
         {children}
      </ReactLenis>
   );
};
