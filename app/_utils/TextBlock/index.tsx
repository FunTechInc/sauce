import s from "./index.module.scss";

type WrapperProps = {
   children: React.ReactNode;
   className?: string;
};
const Wrapper = ({ children, className }: WrapperProps) => {
   return (
      <div className={`${s.wrapper} ${className ? className : ""}`}>
         {children}
      </div>
   );
};

type ClassName = {
   size?: "14" | "15";
   weight?: "normal" | "bold";
   color?: "black" | "white";
   align?: "center" | "left";
   lineHeight?:
      | "1"
      | "xTight"
      | "tight"
      | "snug"
      | "relaxed"
      | "normal"
      | "loose"
      | "xLoose";
   marginBottom?: "0" | "16";
};

interface TextProps extends ClassName {
   children: React.ReactNode;
   tag: keyof JSX.IntrinsicElements;
   isEn?: boolean;
   className?: string;
}

const createClassName = (styles: ClassName) => {
   return (Object.keys(styles) as Array<keyof typeof styles>)
      .map((key) => `${s[key + "_" + styles[key]]}`)
      .join(" ");
};

const Text = ({
   children,
   tag,
   className,
   isEn = false,
   size = "15",
   weight = "normal",
   color = "black",
   align = "left",
   lineHeight = "snug",
   marginBottom = "0",
}: TextProps) => {
   const TagName = tag || "p";
   const styles = { size, weight, color, align, lineHeight, marginBottom };
   return (
      <TagName
         className={`${createClassName(styles)} ${isEn ? "ff_en" : ""} ${
            className ? className : ""
         }`}>
         {children}
      </TagName>
   );
};

/**
 * @description Wrapper: set margin-bottom:0 to last-child
 * @description Text: global Text Component
 * @param isEn false
 * @param size 15
 * @param weight normal
 * @param color black
 * @param align left
 * @param lineHeight snug
 * @param marginBottom 0
 */
const TextBlock = {
   Text: Text,
   Wrapper: Wrapper,
};

export { TextBlock };
