"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

const SESSION_KEY = "forceScrollTo";
const VISIBILITY = "--pageTransitionVisibility";
/**  If you want to force the top, set the ‘forceScrollTo’ key in sessionStorage to something other than ‘false’ before the router event. */
const forceScrollTo = {
   // "top" is meanless in this case
   enable(target: string = "top") {
      sessionStorage.setItem(SESSION_KEY, target);
   },
   disable() {
      sessionStorage.setItem(SESSION_KEY, "false");
   },
   isEnabled() {
      const item = sessionStorage.getItem(SESSION_KEY);
      return item && item !== "false" ? item : false;
   },
};

export const utils = {
   forceScrollTo,
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

   useLayoutEffect(() => {
      const handlePopstate = () => (isPopstate.current = true);
      window.addEventListener("popstate", handlePopstate);
      return () => window.removeEventListener("popstate", handlePopstate);
   }, []);

   const pathname = usePathname();

   useLayoutEffect(() => {
      const target = forceScrollTo.isEnabled();
      if (target) {
         if (!isPopstate.current) {
            window.scrollTo(0, 0);
            if (target.includes("#") && target.length > 1) {
               try {
                  const element = document.querySelector(target);
                  if (element) {
                     window.scrollTo(0, element.getBoundingClientRect().y || 0);
                  }
               } catch {
                  // Invalid selector, ignore
               }
            }
         }
         visible();
      }
      isPopstate.current = false;
      forceScrollTo.disable();

      return () => {
         if (forceScrollTo.isEnabled()) {
            hidden();
         }
      };
   }, [pathname]);

   return null;
};
