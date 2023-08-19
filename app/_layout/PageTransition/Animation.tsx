"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useMekuriAnimation, useMekuriDuration } from "@funtech-inc/mekuri";
import { EASEVAL } from "@/app/_libs/constants";

export const Animation = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef(null);
   const { second } = useMekuriDuration();
   const easing = {
      duration: second,
      ease: `${EASEVAL}.out`,
   };

   useMekuriAnimation({
      onEveryLeave: () => {
         gsap.to(ref.current, {
            opacity: 0,
            ...easing,
         });
      },
      onEveryEnter: () => {
         gsap.to(ref.current, {
            opacity: 1,
            ...easing,
         });
      },
   });
   return <div ref={ref}>{children}</div>;
};
