"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLenis } from "../Lenis";

const SESSION_KEY = "forceScrollToTop";
/**  If you want to force the top, set the ‘forceScrollToTop’ key in sessionStorage to ‘true’ before the router event. */
export const forceScrollToTop = {
   enable: () => sessionStorage.setItem(SESSION_KEY, "true"),
   disable: () => sessionStorage.setItem(SESSION_KEY, "false"),
   isEnabled: () => sessionStorage.getItem(SESSION_KEY) === "true",
};

/** Next.js may not correctly inspect the top-level element of a DOM node. This is particularly noticeable in Route Groups when using layout.tsx. */
export const ForceScrollToTop = () => {
   const isPopstate = useRef(false);
   const lenis = useLenis((s) => s.lenis);

   useEffect(() => {
      const handlePopstate = () => (isPopstate.current = true);
      window.addEventListener("popstate", handlePopstate);
      return () => window.removeEventListener("popstate", handlePopstate);
   }, []);

   const pathname = usePathname();

   useEffect(() => {
      if (!isPopstate.current && forceScrollToTop.isEnabled()) {
         lenis
            ? lenis.scrollTo(0, { immediate: true, force: true, lock: true })
            : window.scrollTo(0, 0);
      }
      isPopstate.current = false;
      forceScrollToTop.disable();
   }, [pathname, lenis]);

   return null;
};
