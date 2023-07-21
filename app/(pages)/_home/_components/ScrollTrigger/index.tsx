"use client";

import s from "./style.module.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ISDEV } from "@/app/_libs/constants";

export const ScrollTriggerSample = () => {
   const ref = useRef(null);
   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const trigger = gsap.to(ref.current, {
         scrollTrigger: {
            start: "top top",
            trigger: ref.current,
            markers: ISDEV,
            onUpdate: (self) => {
               gsap.set(ref.current, { y: 100 * self.progress + "%" });
            },
         },
      });
      return () => {
         trigger.revert();
      };
   }, []);
   return (
      <div ref={ref} className={s.box}>
         ScrollTrigger
      </div>
   );
};
