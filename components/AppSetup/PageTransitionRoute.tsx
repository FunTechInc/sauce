"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLenis } from "../Lenis";

const SESSION_KEY = "forceScrollToTop";
const VISIBILITY = "--pageTransitionVisibility";
/**  If you want to force the top, set the ‘forceScrollToTop’ key in sessionStorage to ‘true’ before the router event. */
const forceScrollToTop = {
   enable: () => sessionStorage.setItem(SESSION_KEY, "true"),
   disable: () => sessionStorage.setItem(SESSION_KEY, "false"),
   isEnabled: () => sessionStorage.getItem(SESSION_KEY) === "true",
};

export const utils = {
   forceScrollToTop,
   sessionKey: SESSION_KEY,
   visibility: VISIBILITY,
};

const visible = () => {
   document.documentElement.style.setProperty(utils.visibility, "visible");
};

const hidden = () => {
   document.documentElement.style.setProperty(utils.visibility, "hidden");
};

/** Next.js may not correctly inspect the top-level element of a DOM node. This is particularly noticeable in Route Groups when using layout.tsx. */
export const PageTransitionRoute = () => {
   const isPopstate = useRef(false);
   const lenis = useLenis((s) => s.lenis);

   useEffect(() => {
      const handlePopstate = () => (isPopstate.current = true);
      window.addEventListener("popstate", handlePopstate);
      return () => window.removeEventListener("popstate", handlePopstate);
   }, []);

   const pathname = usePathname();

   useEffect(() => {
      if (forceScrollToTop.isEnabled()) {
         if (!isPopstate.current) {
            // Separate threads for more stable operation
            setTimeout(() => {
               lenis
                  ? lenis.scrollTo(0, {
                       immediate: true,
                       force: true,
                       lock: true,
                    })
                  : window.scrollTo(0, 0);
               visible();
            }, 0);
         } else {
            visible();
         }
      }
      isPopstate.current = false;
      forceScrollToTop.disable();

      return () => {
         if (forceScrollToTop.isEnabled()) {
            hidden();
         }
      };
   }, [pathname, lenis]);

   return null;
};
