"use client";

import { useLenisRegister } from "@/app/_hooks/useLenis";
import { WrapperLayout as MyWrapper } from "@funtech-inc/spice";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
   useLenisRegister();
   return <MyWrapper>{children}</MyWrapper>;
};
