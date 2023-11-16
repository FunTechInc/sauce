"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useAppStore } from "@/app/_context/useAppStore";
import { useWindowResizeObserver } from "@funtech-inc/spice";

const OPTION = {
   duration: 0.6,
   easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
   smoothWheel: true,
   wheelMultiplier: 1,
   normalizeWheel: true,
   smoothTouch: false,
   infinite: false,
   autoResize: false,
};

export const Lenis = ({ children }: { children: React.ReactNode }) => {
   const lenis = useLenis();
   const lenisRef = useRef<any>();

   useEffect(() => {
      if (!lenis) {
         return;
      }
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
      lenis?.on("scroll", ScrollTrigger.update);
   }, [lenis]);

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

   const isModalOpen = useAppStore(({ isModalOpen }) => isModalOpen);
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);
   useEffect(() => {
      if (isModalOpen || isMenuOpen) {
         lenisRef.current?.stop();
      } else {
         lenisRef.current?.start();
      }
   }, [isModalOpen, isMenuOpen]);

   useWindowResizeObserver({
      callback: () => {
         if (!lenisRef.current) {
            return;
         }
         lenisRef.current?.resize();
      },
   });

   return (
      <ReactLenis root ref={lenisRef} autoRaf={false} option={OPTION}>
         {children}
      </ReactLenis>
   );
};
