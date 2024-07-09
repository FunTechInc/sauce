"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { DURATION, EASE } from "../../_libs/constants";

export const PageTransitionContainer = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const ref = useRef(null);
   useGSAP(() => {
      gsap.fromTo(
         ref.current,
         {
            opacity: 0,
         },
         {
            opacity: 1,
            duration: DURATION.emphasized,
            ease: `${EASE}.inOut`,
         }
      );
   });
   return (
      <div ref={ref} style={{ opacity: 0 }}>
         {children}
      </div>
   );
};
