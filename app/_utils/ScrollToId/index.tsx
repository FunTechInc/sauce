"use client";

import { useLenis } from "@studio-freight/react-lenis";

export const ScrollToId = ({
   target,
   children,
   className,
}: {
   target: React.RefObject<HTMLElement> | string;
   children: React.ReactNode;
   className?: string;
}) => {
   const lenis = useLenis();

   const isRefObj = (
      value: React.RefObject<HTMLElement> | string
   ): value is React.RefObject<HTMLElement> => {
      return value !== null && typeof value === "object" && "current" in value;
   };

   const clickHandler = () => {
      const scrollTarget = isRefObj(target) ? target.current : target;
      lenis?.scrollTo(scrollTarget, {
         offset: -80,
         lock: true,
         force: true,
         duration: 1.2,
         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
   };
   return (
      <button onClick={clickHandler} className={className ? className : ""}>
         {children}
      </button>
   );
};
