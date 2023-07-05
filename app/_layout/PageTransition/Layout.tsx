"use client";
import { usePathname } from "next/navigation";
import { MekuriLayout } from "@funtech-inc/mekuri";

export const PageTransitionLayout = ({
   componentArr,
   children,
}: {
   componentArr: any;
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return (
      <MekuriLayout
         componentArr={componentArr}
         scrollRestoration="top"
         mode="wait"
         router={pathname}>
         {children}
      </MekuriLayout>
   );
};
