"use client";

import { parseISO, format } from "date-fns";

export const DateParser = ({ date }: { date: string }) => {
   return (
      <span suppressHydrationWarning={true}>
         {format(parseISO(date), "yyyy.MM.dd")}
      </span>
   );
};
