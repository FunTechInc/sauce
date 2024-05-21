"use client";

import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@funtech-inc/spice";
import gsap from "gsap";
import s from "./index.module.scss";

type AutoScrollContainerProps = {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
   isReverse?: boolean;
   speed?: number;
};

export const AutoScrollContainer = ({
   children,
   className,
   style,
   isReverse = false,
   speed = 1,
}: AutoScrollContainerProps) => {
   const wrapperRef = useRef<HTMLDivElement>(null);

   const firstChildRef = useRef<HTMLDivElement>(null);
   const secondChildRef = useRef<HTMLDivElement>(null);

   const [isIntersecting, setIsIntersecting] = useState(false);

   const progress = useRef(0);

   useEffect(() => {
      if (!isIntersecting) {
         return;
      }

      const wrapper = wrapperRef.current!;
      const firstChild = firstChildRef.current!;
      const secondChild = secondChildRef.current!;

      const animate = () => {
         const ratio = wrapper.clientWidth / firstChild.clientWidth;
         progress.current += 0.001 * speed * ratio;

         if (progress.current >= 1) {
            progress.current = 0;
         }

         if (isReverse) {
            firstChild.style.transform = `translateX(${
               progress.current * -100
            }%)`;
            secondChild.style.transform = `translateX(${
               100 - progress.current * 100
            }%)`;
         } else {
            firstChild.style.transform = `translateX(${
               progress.current * 100
            }%)`;
            secondChild.style.transform = `translateX(${
               progress.current * 100 - 200
            }%)`;
         }
      };

      gsap.ticker.add(animate);

      return () => {
         gsap.ticker.remove(animate);
      };
   }, [isReverse, speed, isIntersecting]);

   useIntersectionObserver({
      targetRef: wrapperRef,
      once: false,
      callback: {
         onEnter: () => setIsIntersecting(true),
         onLeave: () => setIsIntersecting(false),
      },
   });

   return (
      <div
         ref={wrapperRef}
         className={`${s.wrapper} ${className ? className : ""}`}
         style={style ? style : {}}>
         <div className={s.container}>
            <div ref={firstChildRef}>{children}</div>
            <div ref={secondChildRef}>{children}</div>
         </div>
      </div>
   );
};
