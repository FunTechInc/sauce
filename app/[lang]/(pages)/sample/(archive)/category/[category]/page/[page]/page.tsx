import * as CMS from "@/app/[lang]/_libs/cms";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";
import { Archive } from "../../../../Archive";
import { Locale } from "@/i18n-config";
import { utils } from "@funtech-inc/spice/server";

export async function generateMetadata({
   params: { page, category, lang },
}: {
   params: { page: number; category: string; lang: Locale };
}) {
   const { meta } = await getDictionary(lang);
   const { name: categoryName } = await CMS.get<CMS.CategoriesType>({
      endpoint: "categories",
      contentId: category,
   });
   return {
      title: `${meta.sample.title}(${categoryName})(${page}p)`,
   };
}

export const generateStaticParams = async ({
   params: { category },
}: {
   params: { category: string };
}) => {
   const { totalCount } = await CMS.getList({
      endpoint: "news",
      category: category,
   });
   return utils.getPageRange(totalCount, CMS.PER_PAGE).map((page) => ({
      page: `${page}`,
   }));
};

const Page = async ({
   params: { page, category },
}: {
   params: { page: number; category: string };
}) => {
   return <Archive page={page} category={category} />;
};

export default Page;
