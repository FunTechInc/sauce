"use client";

import { useEffect, useRef } from "react";
import s from "./index.module.scss";

export const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef<HTMLElement>(null);
   useEffect(() => {
      //headerを100vwでfixedにする場合scrollbar分がたつくの回避
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;
      ref.current!.style.paddingRight = `${scrollbarWidth}px`;
   }, []);
   return (
      <header ref={ref} className={s.header}>
         {children}
      </header>
   );
};
