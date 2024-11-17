"use client";

import { parseISO, format } from "date-fns";

export const DateParser = ({
   children,
   format: _format = "yyyy.MM.dd",
}: {
   children: string;
   format?: string;
}) => {
   return (
      <span suppressHydrationWarning={true}>
         {format(parseISO(children), _format)}
      </span>
   );
};
