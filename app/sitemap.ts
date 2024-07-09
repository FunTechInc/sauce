import { MetadataRoute } from "next";
import { Locale } from "@/i18n-config";
import { getRouteArr } from "./[lang]/_libs/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const baseURL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

   const lastModified = new Date();
   const languages: Locale[] = ["ja", "en"];

   /*===============================================
	static pages
	===============================================*/
   const staticPages = getRouteArr();
   const staticPaths: MetadataRoute.Sitemap = [];

   languages.forEach((lang) => {
      staticPages.forEach((page) => {
         const href = page.href.replace(/^\/+/, "");
         staticPaths.push({
            url: `${baseURL}/${lang}/${href}`,
            lastModified: lastModified,
            changeFrequency: "yearly",
         });
      });
   });

   return [...staticPaths];
}
