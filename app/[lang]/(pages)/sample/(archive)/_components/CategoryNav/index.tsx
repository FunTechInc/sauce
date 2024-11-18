"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { useLocalePathname } from "@/hooks/useLocalePathname";

export const CategoryNav = ({
   children,
   id,
}: {
   children: React.ReactNode;
   id?: string;
}) => {
   const pathname = useLocalePathname().basePathname.split("/");
   const isCategory = pathname[2] === "category";
   const isCurrent = isCategory && pathname[3] === id;
   return (
      <LocaleLink
         href={`/sample${id ? `/category/${id}` : ""}`}
         style={{
            textDecoration: "underline",
            color: isCurrent ? "red" : "blue",
         }}>
         {children}
      </LocaleLink>
   );
};
