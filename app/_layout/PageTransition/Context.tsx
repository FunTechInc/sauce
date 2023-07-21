"use client";
import { usePathname } from "next/navigation";
import { MekuriContext } from "@funtech-inc/mekuri";

export const Context = ({
   millisecond,
   routing,
   children,
   scrollRestoration,
}: {
   millisecond: number;
   routing: {
      path: string;
      children: React.ReactNode;
   }[];
   scrollRestoration: "top" | "restore";
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return (
      <MekuriContext
         millisecond={millisecond}
         routing={routing}
         mode="wait"
         scrollRestoration={scrollRestoration}
         router={pathname}>
         {children}
      </MekuriContext>
   );
};
