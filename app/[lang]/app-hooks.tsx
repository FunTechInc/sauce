"use client";

import { useStarter } from "@funtech-inc/spice";
import { poppins, FF_EN } from "./font";
import { useLenisRegister } from "@/hooks/useLenis";
import { useFontsLoaded } from "@/hooks/useFontsLoaded";

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
