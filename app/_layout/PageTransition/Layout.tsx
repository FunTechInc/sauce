"use client";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";
import { usePathname } from "next/navigation";
import { Mekuri, MekuriFreezer } from "@funtech-inc/mekuri";

export const Layout = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
   return (
      <Mekuri>
         <MekuriFreezer key={pathname} routerContext={LayoutRouterContext}>
            {children}
         </MekuriFreezer>
      </Mekuri>
   );
};
