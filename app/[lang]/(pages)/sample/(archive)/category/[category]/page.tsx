import * as CMS from "@/app/[lang]/_libs/cms";
import { Archive } from "../../Archive";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";

export async function generateMetadata({
   params: { category, lang },
}: {
   params: { category: string; lang: Locale };
}) {
   const { meta } = await getDictionary(lang);
   const { name: categoryName } = await CMS.get<CMS.CategoriesType>({
      endpoint: "categories",
      contentId: category,
   });
   return {
      title: `${meta.sample.title}(${categoryName})`,
   };
}

export const generateStaticParams = async () => {
   const categories = await CMS.getList({
      endpoint: "categories",
   });
   const path = categories.contents.map(({ id }) => ({
      category: `${id}`,
   }));
   return path;
};

const Page = async ({
   params: { category },
}: {
   params: { category: string };
}) => {
   return <Archive category={category} />;
};

export default Page;
