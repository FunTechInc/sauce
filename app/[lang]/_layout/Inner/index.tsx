import { forwardRef } from "react";
import s from "./inner.module.scss";
import classnames from "classnames";

type InnerProps = {
   /** "default: 1128rem", "outer: 1360rem", "wide: 1280rem", "narrow: 960rem" */   
   width: "default" | "outer" | "wide" | "narrow";
} & React.HTMLAttributes<HTMLDivElement>;

export const Inner = forwardRef<HTMLDivElement, InnerProps>(
   ({ children, className, width, ...rest }, ref) => {
      return (
         <div
            ref={ref}
            className={classnames(s.inner, s["w_" + width], className)}
            {...rest}>
            {children}
         </div>
      );
   }
);

Inner.displayName = "Inner";
