"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";

const getContent = (arr: any[], id: string) => {
   let content: any;
   arr.forEach((cont) => {
      if (cont.id === id) {
         content = cont;
      }
   });
   return content;
};

export const Content = ({ content }: { content: any }) => {
   const param = useParams();
   //paramはuseParamが更新されるたびに変更されるので、memo化してあげる
   const blog = useMemo(
      () => getContent(content, param.id),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
   );
   return <p>{blog.title}</p>;
};
