import * as CMS from "@/app/[lang]/_libs/cms";
import { utils } from "@funtech-inc/spice/server";
import { Archive } from "../../Archive";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";
import { Locale } from "@/i18n-config";

export async function generateMetadata({
   params: { page, lang },
}: {
   params: { page: number; lang: Locale };
}) {
   const { meta } = await getDictionary(lang);
   return {
      title: `${meta.sample.title}(${page}p)`,
   };
}

export const generateStaticParams = async () => {
   const { totalCount } = await CMS.getList({
      endpoint: "news",
   });
   return utils.getPageRange(totalCount, CMS.PER_PAGE).map((page) => ({
      page: `${page}`,
   }));
};

const Page = async ({ params: { page } }: { params: { page: number } }) => {
   return <Archive page={page} />;
};

export default Page;
