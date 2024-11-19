import "server-only";

import * as CMS from "@/app/[lang]/_libs/cms";
import { Pagination } from "./_components/Pagination";
import { LocaleLink } from "@/components/LocaleLink";
import { SampleLayout } from "@/app/[lang]/_layout/SampleLayout";
import { CategoryNav } from "./_components/CategoryNav";

export const Archive = async ({
   page,
   category,
}: {
   page?: number;
   category?: string;
}) => {
   const categoryList = await CMS.getList<CMS.CategoriesType>({
      endpoint: "categories",
      perPage: 100,
   });

   const { totalCount, contents } = await CMS.getList({
      endpoint: "news",
      page: page,
      category: category,
   });

   if (totalCount === 0) {
      return <div style={{ marginTop: "40px" }}>記事がありません</div>;
   }

   return (
      <SampleLayout>
         <nav>
            <ul style={{ display: "flex", gap: "16px" }}>
               {categoryList.contents.map((category, i) => (
                  <li key={i}>
                     <CategoryNav id={category.id}>{category.name}</CategoryNav>
                  </li>
               ))}
            </ul>
         </nav>
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
      </SampleLayout>
   );
};
