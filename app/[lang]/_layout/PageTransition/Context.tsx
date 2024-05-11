"use client";

import { usePathname } from "next/navigation";
import { MekuriContext } from "@funtech-inc/mekuri";
import { TRANSITION_DURATIONVAL } from "@/app/[lang]/_libs/constants";
import { useLenis } from "@/app/[lang]/_hooks/useLenis";
import { useRef } from "react";
import Lenis from "lenis";

export const Context = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
   const lenisRef = useRef<Lenis>();
   const lenis = useLenis((s) => s.lenis);
   if (lenis) lenisRef.current = lenis;
   return (
      <MekuriContext
         trigger={pathname}
         millisecond={TRANSITION_DURATIONVAL * 1000}
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
