import * as CMS from "@/app/[lang]/_libs/cms";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";
import { Archive } from "../../../../Archive";
import { Locale } from "@/i18n-config";
import { utils } from "@funtech-inc/spice/server";

export async function generateMetadata({
   params,
}: {
   params: Promise<{ page: number; category: string; lang: Locale }>;
}) {
   const { page, category, lang } = await params;
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
   params,
}: {
   params: Promise<{ category: string }>;
}) => {
   const { category } = await params;
   const { totalCount } = await CMS.getList({
      endpoint: "news",
      category: category,
   });
   return utils.getPageRange(totalCount, CMS.PER_PAGE).map((page) => ({
      page: `${page}`,
   }));
};

const Page = async ({
   params,
}: {
   params: Promise<{ page: number; category: string }>;
}) => {
   const { page, category } = await params;
   return <Archive page={page} category={category} />;
};

export default Page;
