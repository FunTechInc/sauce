"use client";
import { usePathname } from "next/navigation";
import { MekuriContext } from "@funtech-inc/mekuri";

export const PageTransitionContext = ({
   millisecond,
   children,
}: {
   millisecond: number;
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return (
      <MekuriContext
         millisecond={millisecond}
         preventArr={[]}
         router={pathname}>
         {children}
      </MekuriContext>
   );
};
