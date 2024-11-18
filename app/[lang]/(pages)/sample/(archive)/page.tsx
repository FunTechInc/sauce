import type { Metadata } from "next";
import { Archive } from "./Archive";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";
import { Locale } from "@/i18n-config";

export async function generateMetadata({
   params,
}: {
   params: { lang: Locale };
}): Promise<Metadata> {
   const { meta } = await getDictionary(params.lang);
   return {
      title: meta.sample.title,
      description: meta.sample.description,
   };
}

const Page = async () => {
   return <Archive />;
};

export default Page;
