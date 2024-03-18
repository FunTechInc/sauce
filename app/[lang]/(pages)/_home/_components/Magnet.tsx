"use client";

import { Magnet as MyMagnet, SplitText } from "@funtech-inc/spice";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { EASING } from "@/app/[lang]/_libs/constants";
import s from "../home.module.scss";

export const Magnet = ({ title }: { title: string }) => {
   const ref = useRef<HTMLParagraphElement>(null);
   useGSAP(
      () => {
         gsap.from("span", {
            opacity: 0,
            y: 16,
            ...EASING,
            stagger: 0.1,
         });
      },
      { scope: ref }
   );
   return (
      <MyMagnet
         className={s.magnet}
         callback={{
            onMove: (props) => {
               const animProps = { duration: 0.6, ease: "power2.out" };
               let xTo = gsap.quickTo(props.target, "x", animProps),
                  yTo = gsap.quickTo(props.target, "y", animProps);
               xTo(props.x * 0.4);
               yTo(props.y * 0.4);
            },
            onLeave: ({ target }) => {
               gsap.to(target, {
                  x: 0,
                  y: 0,
                  duration: 0.6,
                  ease: "back.out(4)",
                  overwrite: true,
               });
            },
         }}>
         <h1 ref={ref} className={s.magnetTitle}>
            <SplitText text={title} />
         </h1>
      </MyMagnet>
   );
};
