"use client";

import { useStarter } from "@funtech-inc/spice";
import { poppins, FF_EN } from "./fonts";
import { useFontsLoaded } from "@/hooks/useFontsLoaded";
import { useGsapRegister } from "@/hooks/useGsapRegister";

export const AppSetup = () => {
   useStarter();
   useFontsLoaded();
   useGsapRegister();

   return (
      <style jsx global>{`
         .${FF_EN} {
            font-family: ${poppins.style.fontFamily};
            letter-spacing: 0;
         }
      `}</style>
   );
};
