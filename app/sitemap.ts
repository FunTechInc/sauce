import { MetadataRoute } from "next";
import { Locale } from "@/i18n-config";
import { getRouteArr } from "./[lang]/_libs/constants";

type SitemapProps = {
   lastModified?: string | Date | undefined;
   changeFrequency?:
      | "yearly"
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "never"
      | undefined;
   priority?: number | undefined;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const baseURL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

   const lastModified = new Date();
   const languages: Locale[] = ["ja", "en"];

   const addPath = (
      sitemapRoute: MetadataRoute.Sitemap,
      url: string,
      override: SitemapProps = {}
   ) => {
      sitemapRoute.push({
         url: url,
         lastModified: lastModified,
         changeFrequency: "yearly",
         ...override,
      });
   };

   /*===============================================
	static pages
	===============================================*/
   const staticPages = getRouteArr();
   const staticPaths: MetadataRoute.Sitemap = [];

   languages.forEach((lang) => {
      addPath(staticPaths, `${baseURL}/${lang}`);
      staticPages.forEach((page) => {
         const href = page.href.replace(/^\/+/, "");
         addPath(staticPaths, `${baseURL}/${lang}/${href}`);
      });
   });

   return [...staticPaths];
}
