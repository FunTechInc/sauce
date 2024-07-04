"use client";

import { useStarter } from "@funtech-inc/spice";
import { poppins, FF_EN } from "./font";
import { useLenisRegister } from "@/hooks/useLenis";
import { useFontsLoaded } from "@/hooks/useFontsLoaded";
import { useGsapRegister } from "@/hooks/useGsapRegister";

export const AppHooks = () => {
   useStarter();
   useFontsLoaded();
   useGsapRegister();
   useLenisRegister();
   return (
      <style jsx global>{`
         .${FF_EN} {
            font-family: ${poppins.style.fontFamily};
            letter-spacing: 0;
         }
      `}</style>
   );
};
