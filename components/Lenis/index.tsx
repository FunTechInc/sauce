"use client";

import { forwardRef, useCallback, useEffect, useRef } from "react";
import LenisScroller from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { create } from "zustand";
import { useAppStore } from "@/app/[lang]/_context/useAppStore";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useFrame, useStableScroller } from "@funtech-inc/spice";
import * as PageTrans from "../AppSetup/PageTransitionRoute";

export const LENIS_CONFIG = {
   duration: 1.2,
   easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
};

type LenisStore = {
   lenis: LenisScroller | null;
   setLenis: (value: LenisScroller) => void;
};

export const useLenis = create<LenisStore>((set) => ({
   lenis: null,
   setLenis: (value: LenisScroller) => set({ lenis: value }),
}));

export const Lenis = () => {
   const lenis = useRef<LenisScroller | null>(null);
   const setLenis = useLenis((state) => state.setLenis);

   const stableScroller = useStableScroller();

   useEffect(() => {
      lenis.current = new LenisScroller({
         ...LENIS_CONFIG,
         wrapper: stableScroller,
      });
      setLenis(lenis.current);

      // integrate with GSAP
      ScrollTrigger.refresh();
      lenis.current.on("scroll", ScrollTrigger.update);

      gsap.ticker.lagSmoothing(0);

      // Scrolling is stopped at popstate because the scrolling before the transition is inherited.
      const handlePopstate = () => {
         lenis.current?.stop();
         setTimeout(() => lenis.current?.start(), 0);
      };
      window.addEventListener("popstate", handlePopstate);

      return () => {
         lenis.current?.destroy();
         window.removeEventListener("popstate", handlePopstate);
      };
   }, [setLenis, stableScroller]);

   // runtime
   useFrame((time) => lenis.current?.raf(time * 1000));

   // stop scrolling
   const isModalOpen = useAppStore(({ isModalOpen }) => isModalOpen);
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);
   useEffect(() => {
      if (isModalOpen || isMenuOpen) {
         lenis.current?.stop();
      } else {
         lenis.current?.start();
      }
   }, [isMenuOpen, isModalOpen]);

   return null;
};

/**
 * Call `lenis.stop()` when routing because scrolling continues after page transitions if routing is done during `lenis-scrolling`.
 * 
 * ```tsx
 * const bild = useLenisLink(props);
   return <Link {...bild}>{children}</Link>;
 * ```
 */
export const useLenisLink = (
   props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
   const router = useRouter();
   const lenis = useLenis((state) => state.lenis);

   const onClick: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
      (e) => {
         if (
            (!props.target || props.target === "_self") &&
            props.scroll !== false
         ) {
            e.preventDefault();
            const hash = props.href.includes("#")
               ? `#${props.href.split("#")[1]}`
               : undefined;
            PageTrans.utils.forceScrollTo.enable(hash);
            lenis?.stop();
            router.push(props.href);
            lenis?.start();
         }
         props?.onClick?.(e);
      },
      [props, lenis, router]
   );

   return { ...props, onClick };
};

export const LenisLink = forwardRef<
   HTMLAnchorElement,
   LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, ...props }, ref) => {
   const bild = useLenisLink(props);
   return (
      <Link ref={ref} {...bild}>
         {children}
      </Link>
   );
});

LenisLink.displayName = "LenisLink";
