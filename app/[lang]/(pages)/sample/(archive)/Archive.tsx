import "server-only";
import * as CMS from "@/app/[lang]/_libs/cms";
import { Pagination } from "./_components/Pagination";
import { LocaleLink } from "@/components/LocaleLink";

export const Archive = async ({
   page,
   category,
}: {
   page?: number;
   category?: string;
}) => {
   const { totalCount, contents } = await CMS.getList({
      endpoint: "news",
      page: page,
      category: category,
   });

   if (totalCount === 0) {
      return <div style={{ marginTop: "40px" }}>記事がありません</div>;
   }

   return (
      <>
         <div
            style={{
               marginTop: "40px",
               display: "flex",
               flexDirection: "column",
               gap: "16px",
            }}>
            {contents.map((item, i) => (
               <LocaleLink
                  key={i}
                  href={`/sample/${item.id}`}
                  style={{ textDecoration: "underline" }}>
                  {item.title}
               </LocaleLink>
            ))}
         </div>
         <Pagination
            style={{ marginTop: "40px" }}
            category={category}
            page={page}
            totalCount={totalCount}
         />
      </>
   );
};
