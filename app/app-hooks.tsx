"use client";

import { useEffect } from "react";
import { useStarter } from "@funtech-inc/spice";
import { useAppStore } from "./_context/useAppStore";

export const AppHooks = () => {
   useStarter({
      // reloadThresholds: [960, 560],
      isFixViewportForSmall: true,
      areYouFun: true,
   });
   useFontsLoaded();
   return null;
};

//set opacity to 1 after font is loaded
const useFontsLoaded = () => {
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
};
