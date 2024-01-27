"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ISDEV } from "@/app/[lang]/_libs/constants";
import s from "./index.module.scss";

export const ScrollTriggerText = ({
   isReverse = false,
   children,
   className,
}: {
   isReverse?: boolean;
   children: React.ReactNode;
   className?: string;
}) => {
   const wrapperRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const scrollTrigger = gsap.to(contentRef.current, {
         x: `${isReverse ? 50 : -50}vw`,
         scrollTrigger: {
            start: "top bottom",
            trigger: wrapperRef.current,
            markers: ISDEV,
            scrub: 1,
         },
      });
      return () => {
         scrollTrigger.revert();
      };
   }, [isReverse]);

   return (
      <div ref={wrapperRef} className={s.wrapper}>
         <div
            ref={contentRef}
            className={isReverse ? s.content_reverse : s.content}>
            <p className={className ? className : ""}>{children}</p>
         </div>
      </div>
   );
};
