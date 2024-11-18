import * as CMS from "@/app/[lang]/_libs/cms";
import type { Metadata } from "next";
import { utils } from "@funtech-inc/spice/server";
import { Archive } from "../../Archive";

const metadata: Metadata = {
   title: "NEWS",
};

export const generateStaticParams = async () => {
   const { totalCount } = await CMS.getList({
      endpoint: "news",
   });
   return utils.getPageRange(totalCount, CMS.PER_PAGE).map((page) => ({
      page: `${page}`,
   }));
};

const News = async ({ params: { page } }: { params: { page: number } }) => {
   return <Archive page={page} />;
};

export { metadata };
export default News;
