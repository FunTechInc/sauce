"use client";

import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

export const ScrollToId = ({
   target,
   children,
}: {
   target: string;
   children: React.ReactNode;
}) => {
   const lenis = useLenis();
   const clickHandler = () => {
      lenis.scrollTo(target, {
         offset: -80,
         lock: true,
         force: true,
         duration: 1.2,
         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
   };
   return (
      <Link href={target} onClick={clickHandler}>
         {children}
      </Link>
   );
};
