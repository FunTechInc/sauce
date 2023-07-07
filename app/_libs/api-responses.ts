import { createClient } from "microcms-js-sdk";
import { Client as Notion } from "@notionhq/client";
import { Vollkorn } from "next/font/google";

/*===============================================
microCMS
===============================================*/
const client = createClient({
   serviceDomain: process.env.SERVICE_DOMAIN!,
   apiKey: process.env.API_KEY!,
});
export const getAllBlogs = async () => {
   try {
      const response = await client.getList({
         //'force-cache' | 'no-store' default is force-cache
         customRequestInit: {
            cache: "force-cache",
         },
         endpoint: "blogs",
      });
      return response;
   } catch (error) {
      throw new Error("Failed to fetch data");
   }
};
export const getBlogById = async (id: string) => {
   try {
      const response = await client.get({
         endpoint: "blogs",
         contentId: id,
      });
      return response;
   } catch (error) {
      throw new Error("Failed to fetch data");
   }
};

/*===============================================
Notion
===============================================*/
const notion = new Notion({
   auth: process.env.NOTION_API,
});

export const getProperty = async (pageId: string, propertyId: string) => {
   const response = await notion.pages.properties.retrieve({
      page_id: pageId,
      property_id: propertyId,
   });
   return response;
};

type TNotionPost = {
   id: string;
   title: string;
}[];
export const getTitleInProperty = async (
   pageId: string,
   propertyId: string
) => {
   const response = await getProperty(pageId, propertyId);

   if (!response) return null;
   if (!("results" in response)) return null;
   if (!("title" in response.results[0])) return null;

   return response.results[0].title.plain_text;
};

export const getNotionDatabase = async () => {
   const databaseId = process.env.NOTION_DATABASE_ID;
   const posts = await notion.databases.query({
      database_id: databaseId!,
   });

   const responseWithProperties = await Promise.all(
      posts.results.map(async (post) => {
         if (!("properties" in post)) return null;

         const pageId = post.id;
         const titlePropertyId = post.properties.Name.id;

         const title = await getTitleInProperty(pageId, titlePropertyId);

         const postInfo = {
            id: pageId,
            title: title || "",
         };
         return postInfo;
      })
   );
   return responseWithProperties.filter((post) => post !== null) as TNotionPost;
};
