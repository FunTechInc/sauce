"use client";

import { parseISO, format } from "date-fns";

export const DateParser = ({ date, format:_format = "yyyy.MM.dd"}: { date: string, format?: string }) => {
   return (
      <span suppressHydrationWarning={true}>
         {format(parseISO(date), _format)}
      </span>
   );
};
