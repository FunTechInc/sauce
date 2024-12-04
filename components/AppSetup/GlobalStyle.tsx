"use client";

import { poppins, FF_EN } from "@/app/fonts";

export const GlobalStyle = () => {
   return (
      <style jsx global>{`
         .${FF_EN} {
            font-family: ${poppins.style.fontFamily};
            letter-spacing: 0;
         }
      `}</style>
   );
};
