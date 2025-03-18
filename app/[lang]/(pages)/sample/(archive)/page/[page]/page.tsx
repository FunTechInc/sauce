import * as CMS from "@/app/[lang]/_libs/cms";
import { utils } from "@funtech-inc/spice/server";
import { Archive } from "../../Archive";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";
import { Locale } from "@/i18n-config";

export async function generateMetadata({
   params,
}: {
   params: Promise<{ page: number; lang: Locale }>;
}) {
   const { page, lang } = await params;
   const { meta } = await getDictionary(lang);
   return {
      title: `${meta.sample.title}(${page}p)`,
   };
}

export const generateStaticParams = async () => {
   const { totalCount } = await CMS.getList({
      endpoint: "news",
   });
   if (totalCount === 0) return [];
   return utils.getPageRange(totalCount, CMS.PER_PAGE).map((page) => ({
      page: `${page}`,
   }));
};

const Page = async ({ params }: { params: Promise<{ page: number }> }) => {
   const { page } = await params;
   return <Archive page={page} />;
};

export default Page;
