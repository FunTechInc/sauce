"use client";

import { useDeviceDetector, useStarter } from "@funtech-inc/spice";
import { poppins, FF_EN } from "./font";
import { useLenisRegister } from "@/hooks/useLenis";
import { useFontsLoaded } from "@/hooks/useFontsLoaded";
import { useGsapRegister } from "@/hooks/useGsapRegister";

/**
 * @description :root css variables
 * Some mobile browsers, handle viewports containing navigation bars differently, so for mobile, a fixed value can be used css variables.
 * Use `window.screen.height` as some browsers may change the height of the viewport when the navigation bar is opened or closed.
 */

export const AppHooks = () => {
   useStarter();
   useFontsLoaded();
   useGsapRegister();
   useLenisRegister();
   const { isMobile } = useDeviceDetector();
   return (
      <style jsx global>{`
         :root {
            --fixed-svh: ${isMobile ? `${window.innerHeight / 100}px` : "1svh"};
            --fixed-lvh: ${isMobile
               ? `${window.screen.height / 100}px`
               : "1lvh"};
         }
         .${FF_EN} {
            font-family: ${poppins.style.fontFamily};
            letter-spacing: 0;
         }
      `}</style>
   );
};
