"use client";

import { usePathname } from "next/navigation";
import { MekuriContext } from "@funtech-inc/mekuri";

export const Context = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
   return (
      <MekuriContext
         trigger={pathname}
         millisecond={600}
         mode="wait"
         scrollRestoration={"restore"}>
         {children}
      </MekuriContext>
   );
};
