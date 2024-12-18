"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { DURATION, EASE } from "../../_libs/constants";
import { utils } from "@/components/AppSetup/PageTransitionRoute";

type PageTransitionProps = {
   fromVars?: gsap.TweenVars;
   toVars?: gsap.TweenVars;
   children: React.ReactNode;
};

export const PageTransition = ({
   children,
   fromVars,
   toVars,
}: PageTransitionProps) => {
   const ref = useRef(null);
   useGSAP(() => {
      gsap.fromTo(
         ref.current,
         {
            opacity: 0,
            ...fromVars,
         },
         {
            opacity: 1,
            duration: DURATION.emphasized,
            ease: `${EASE}.inOut`,
            ...toVars,
         }
      );
   });
   return (
      <div
         ref={ref}
         style={{ opacity: 0, visibility: `var(${utils.visibility})` as any }}>
         {children}
      </div>
   );
};
