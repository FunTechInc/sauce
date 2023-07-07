"use client";
import { usePathname } from "next/navigation";
import { MekuriContext } from "@funtech-inc/mekuri";

export const PageTransitionContext = ({
   millisecond,
   routing,
   children,
}: {
   millisecond: number;
   routing: {
      path: string;
      children: React.ReactNode;
   }[];
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return (
      <MekuriContext
         millisecond={millisecond}
         routing={routing}
         mode="wait"
         scrollRestoration="top"
         router={pathname}>
         {children}
      </MekuriContext>
   );
};
