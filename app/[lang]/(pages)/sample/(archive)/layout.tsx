import "server-only";
import * as CMS from "@/app/[lang]/_libs/cms";
import { SampleLayout } from "@/app/[lang]/_layout/SampleLayout";
import { CategoryNav } from "./_components/CategoryNav";

const Layout = async ({ children }: { children: React.ReactNode }) => {
   const categoryList = await CMS.getList<CMS.CategoriesType>({
      endpoint: "categories",
      perPage: 100,
   });

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
         {children}
      </SampleLayout>
   );
};

export default Layout;
