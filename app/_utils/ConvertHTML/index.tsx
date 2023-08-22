import Image from "next/image";
import parse, { Element } from "html-react-parser";

type ConvertBodyProps = {
   contentHTML: string;
};
export const ConvertHTML = ({ contentHTML }: ConvertBodyProps) => {
   return parse(contentHTML, {
      replace: (domNode) => {
         if (
            domNode instanceof Element &&
            domNode.attribs &&
            domNode.name === "img"
         ) {
            const { src, alt, width, height } = domNode.attribs;
            return (
               <Image src={src} width={+width} height={+height} alt={alt} />
            );
         }
      },
   });
};
