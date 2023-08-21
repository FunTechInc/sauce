"use client";

import { usePathname } from "next/navigation";
import { MekuriContext } from "@funtech-inc/mekuri";
import { useLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";

export const Context = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
   const lenisRef = useRef<any>();
   const lenis = useLenis();
   useEffect(() => {
      lenisRef.current = lenis;
   }, [lenis]);
   return (
      <MekuriContext
         trigger={pathname}
         millisecond={600}
         mode="wait"
         scrollRestoration={{
            scrollRestoration: "restore",
            onRestore: (pos) => {
               lenisRef.current?.scrollTo(pos, {
                  immediate: true,
                  force: true,
               });
            },
         }}>
         {children}
      </MekuriContext>
   );
};
