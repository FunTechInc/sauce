import type { Metadata } from "next";
import { Archive } from "./Archive";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";
import { Locale } from "@/i18n-config";

export async function generateMetadata({
   params,
}: {
   params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
   const { lang } = await params;
   const { meta } = await getDictionary(lang);
   return {
      title: meta.sample.title,
      description: meta.sample.description,
   };
}

const Page = async () => {
   return <Archive />;
};

export default Page;
