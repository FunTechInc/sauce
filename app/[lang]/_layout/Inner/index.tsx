import { forwardRef } from "react";
import s from "./inner.module.scss";

type InnerProps = {
   /** "wide:112.8rem" | "narrow:96rem" | "outer:136rem" */
   width: "wide" | "narrow" | "outer";
} & React.HTMLAttributes<HTMLDivElement>;

export const Inner = forwardRef<HTMLDivElement, InnerProps>(
   ({ children, className, width, ...rest }, ref) => {
      return (
         <div
            ref={ref}
            className={`${s.inner} ${s["w_" + width]} ${className || ""}`}
            {...rest}>
            {children}
         </div>
      );
   }
);

Inner.displayName = "Inner";
