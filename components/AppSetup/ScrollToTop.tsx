"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useLenis } from "../Lenis";

// Next.js may not correctly inspect the top-level element of a DOM node. This is particularly noticeable in Route Groups when using layout.tsx.
export const ScrollToTop = () => {
   const isPopstate = useRef(false);
   const lenis = useLenis((s) => s.lenis);

   useEffect(() => {
      const handlePopstate = () => (isPopstate.current = true);
      window.addEventListener("popstate", handlePopstate);
      return () => window.removeEventListener("popstate", handlePopstate);
   }, []);

   const pathname = usePathname();

   useLayoutEffect(() => {
      if (!isPopstate.current) {
         lenis
            ? lenis.scrollTo(0, { immediate: true, force: true, lock: true })
            : window.scrollTo(0, 0);
      }
      isPopstate.current = false;
   }, [pathname, lenis]);

   return null;
};
