import * as CMS from "@/app/[lang]/_libs/cms";
import { Archive } from "../../_components/Archive";

export async function generateMetadata({
   params: { category },
}: {
   params: { category: string };
}) {
   const { name: categoryName } = (await CMS.get({
      endpoint: "categories",
      contentId: category,
   })) as any;
   return {
      title: `${categoryName}`,
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
