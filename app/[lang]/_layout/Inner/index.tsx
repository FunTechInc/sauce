import s from "./inner.module.scss";

type InnerProps = {
   children: React.ReactNode;
   className?: string;
   /** "wide:128rem" | "narrow:96rem" */
   width: "wide" | "narrow";
};

export const Inner = ({ children, className, width }: InnerProps) => {
   return (
      <div
         className={`${s.inner} ${s["w_" + width]} ${
            className ? className : ""
         }`}>
         {children}
      </div>
   );
};
