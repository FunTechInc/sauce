import { forwardRef, useEffect, useState } from "react";
import s from "./loader.module.scss";

export type LoaderProps = {
   className?: string;
   loader?: "skeleton" | "circular" | React.ReactNode;
   /** 1000ms */
   delay?: number;
   onView?: {
      /** 0.3s */
      transitionDuration?: React.CSSProperties["transitionDuration"];
      /** ease-in-out */
      transitionTimingFunction?: React.CSSProperties["transitionTimingFunction"];
   };
   skeleton?: {
      /** rgba(255,255,255,0.64) */
      waveColor?: string;
      /** 1.6s */
      animationDuration?: React.CSSProperties["animationDuration"];
      /** ease-in-out */
      animationTimingFunction?: React.CSSProperties["animationTimingFunction"];
   };
   circular?: {
      /** 24px */
      width?: React.CSSProperties["width"];
      /** 24px */
      height?: React.CSSProperties["height"];
      /** 2px solid #fff */
      border?: React.CSSProperties["border"];
      /** 1.6s */
      animationDuration?: React.CSSProperties["animationDuration"];
      /** linear */
      animationTimingFunction?: React.CSSProperties["animationTimingFunction"];
   };
   children?: React.ReactNode;
};

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
   (
      {
         className,
         loader = "skeleton",
         delay = 1000,
         onView,
         skeleton,
         circular,
         children,
      },
      ref
   ) => {
      const [isView, setIsView] = useState(delay === 0);
      const hasChildren = Boolean(children);
      useEffect(() => {
         if (delay === 0) return;
         setTimeout(() => setIsView(true), delay);
      }, [delay]);
      return (
         <div
            ref={ref}
            className={`${className || ""} ${s.loader_wrapper} `}
            style={
               hasChildren
                  ? {
                       maxWidth: "fit-content",
                       height: "auto",
                    }
                  : {}
            }>
            <div
               className={s.loader_container}
               style={
                  isView
                     ? {
                          opacity: 1,
                          transitionProperty: "opacity",
                          transitionDuration:
                             onView?.transitionDuration || "0.3s",
                          transitionTimingFunction:
                             onView?.transitionTimingFunction || "ease-in-out",
                       }
                     : {}
               }>
               {loader === "skeleton" ? (
                  <div
                     className={s.loader_skeleton}
                     style={{
                        background: `linear-gradient(90deg,transparent,${
                           skeleton?.waveColor || "rgba(255,255,255,0.64)"
                        },transparent)`,
                        animationDuration:
                           skeleton?.animationDuration || "1.6s",
                        animationTimingFunction:
                           skeleton?.animationTimingFunction || "ease-in-out",
                     }}></div>
               ) : loader === "circular" ? (
                  <div
                     className={s.loader_circular}
                     style={{
                        width: circular?.width ? circular?.width : "24px",
                        height: circular?.height ? circular?.height : "24px",
                        border: circular?.border || "2px solid #fff",
                        borderBottomColor: "transparent",
                        animationDuration:
                           skeleton?.animationDuration || "1.6s",
                        animationTimingFunction:
                           skeleton?.animationTimingFunction || "linear",
                     }}></div>
               ) : (
                  loader
               )}
               {hasChildren && (
                  <div style={{ visibility: "hidden" }}>{children}</div>
               )}
            </div>
         </div>
      );
   }
);

Loader.displayName = "Loader";
