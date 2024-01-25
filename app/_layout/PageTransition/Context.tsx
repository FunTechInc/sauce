"use client";

import { usePathname } from "next/navigation";
import { MekuriContext } from "@funtech-inc/mekuri";
import { useEffect, useRef } from "react";
import { useLenis } from "@/app/_hooks/useLenis";

export const Context = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
   const lenisRef = useRef<any>();
   const lenis = useLenis((s) => s.lenis);
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
            onLeave: () => {
               lenisRef.current?.stop();
            },
            onEnter: (pos) => {
               lenisRef.current?.scrollTo(pos, {
                  immediate: true,
                  force: true,
                  lock: true,
                  onComplete: () => {
                     lenisRef.current?.start();
                  },
               });
            },
         }}>
         {children}
      </MekuriContext>
   );
};
