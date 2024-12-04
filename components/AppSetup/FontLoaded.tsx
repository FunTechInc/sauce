"use client";

import { useEffect } from "react";
import { useAppStore } from "@/app/[lang]/_context/useAppStore";

export const FontLoaded = () => {
   useEffect(() => {
      const maxWaitTime = 1500;

      const timeout = window.setTimeout(() => {
         onReady();
      }, maxWaitTime);

      function onReady() {
         window.clearTimeout(timeout);
         useAppStore.setState({ fontsLoaded: true });
         document.documentElement.classList.add("fonts-loaded");
      }

      try {
         document.fonts.ready
            .then(() => {
               onReady();
            })
            .catch((error: unknown) => {
               console.error(error);
               onReady();
            });
      } catch (error) {
         console.error(error);
         onReady();
      }
   }, []);

   return null;
};
