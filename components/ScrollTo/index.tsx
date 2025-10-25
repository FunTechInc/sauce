"use client";

import { useLenis, LENIS_CONFIG } from "@/components/Lenis";
import { useCallback } from "react";

type Target = React.RefObject<HTMLElement> | number | string | HTMLElement;

type ScrollToProps = {
   target: Target;
   offset?: number;
   duration?: number;
   easing?: (t: number) => number;
} & React.HTMLAttributes<HTMLButtonElement>;

export const ScrollTo = ({
   target,
   offset = 0,
   duration = LENIS_CONFIG.duration,
   easing = LENIS_CONFIG.easing,
   ...rest
}: ScrollToProps) => {
   const lenis = useLenis((s) => s.lenis);

   const isRefObj = (value: Target): value is React.RefObject<HTMLElement> => {
      return value !== null && typeof value === "object" && "current" in value;
   };

   const onClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
      (e) => {
         const scrollTarget = isRefObj(target) ? target.current : target;
         if (scrollTarget == null) {
            console.error("scrollTarget is not valid");
            return;
         }
         lenis?.scrollTo(scrollTarget, {
            lock: true,
            force: true,
            offset,
            duration,
            easing,
         });
         if (rest.onClick) {
            rest.onClick(e);
         }
      },
      [lenis, target, rest, offset, duration, easing]
   );

   return <button {...{ ...rest, onClick }} />;
};
