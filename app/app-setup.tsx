"use client";

import { useDeviceDetector, useStarter } from "@funtech-inc/spice";
import { poppins, FF_EN } from "./fonts";
import { useLenisRegister } from "@/hooks/useLenis";
import { useFontsLoaded } from "@/hooks/useFontsLoaded";
import { useGsapRegister } from "@/hooks/useGsapRegister";

/**
 * @description :root css variables
 * `Line` browsers show/hide the navigation bar due to scrolling, which changes the values of 100svh and 100lvh, so they are fixed by the values of window.
 */

export const AppSetup = () => {
   useStarter();
   useFontsLoaded();
   useGsapRegister();
   useLenisRegister();
   const { isMobile } = useDeviceDetector();
   return (
      <style jsx global>{`
         :root {
            --stable-svh: ${isMobile
               ? `${window.innerHeight / 100}px`
               : "1svh"};
            --stable-lvh: ${isMobile
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
