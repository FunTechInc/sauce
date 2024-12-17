import * as CMS from "@/app/[lang]/_libs/cms";
import { Archive } from "../../Archive";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";

export async function generateMetadata({
   params,
}: {
   params: Promise<{ category: string; lang: Locale }>;
}) {
   const { lang, category } = await params;
   const { meta } = await getDictionary(lang);
   const { name: categoryName } = await CMS.get<CMS.Categories>({
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

const Page = async ({ params }: { params: Promise<{ category: string }> }) => {
   const { category } = await params;
   return <Archive category={category} />;
};

export default Page;
