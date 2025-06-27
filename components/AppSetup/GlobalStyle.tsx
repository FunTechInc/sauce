"use client";

import { poppins, FF_EN } from "@/app/fonts";
import { useDeviceDetector } from "@funtech-inc/spice";

export const GlobalStyle = () => {
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
