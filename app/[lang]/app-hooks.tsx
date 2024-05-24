"use client";

import { useEffect } from "react";
import { useStarter } from "@funtech-inc/spice";
import { useAppStore } from "./_context/useAppStore";
import { useLenisRegister } from "@/hooks/useLenis";
import { poppins, FF_EN } from "./font";

export const AppHooks = () => {
   useStarter({
      // reloadThresholds: [960, 560],
      isFixViewportForSmall: true,
      // TODO:自社プロジェクト以外はfalseにする
      areYouFun: true,
   });
   useFontsLoaded();
   useLenisRegister();
   return (
      <style jsx global>{`
         .${FF_EN} {
            font-family: ${poppins.style.fontFamily};
         }
      `}</style>
   );
};

/**
 * set opacity to 1 after font is loaded
 */
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
