"use client";

import { useLenisRegister } from "@/app/_hooks/useLenis";
import { WrapperLayout as MyWrapper } from "@funtech-inc/spice";
import gsap from "gsap";
import { useEffect } from "react";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
   const lenis = useLenisRegister();

   // r3fのaddEffectでループを回したい時は、以下を削除して、canvasコンテキストで`useLenis`を使う
   useEffect(() => {
      if (!lenis.current) return;
      function update(time: number) {
         lenis.current?.raf(time * 1000);
      }
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);
      return () => {
         gsap.ticker.remove(update);
      };
   }, [lenis]);

   return <MyWrapper>{children}</MyWrapper>;
};
