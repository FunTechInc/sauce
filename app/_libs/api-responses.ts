import { createClient } from "microcms-js-sdk";

// microCMS
const client = createClient({
   serviceDomain: process.env.SERVICE_DOMAIN!,
   apiKey: process.env.API_KEY!,
});

type BlogListResponse = {
   id: string;
   title: string;
};
export const getAllBlogs = async () => {
   try {
      const response = await client.getList({
         // default is force-cache
         customRequestInit: {
            cache: "force-cache",
         },
         endpoint: "news",
      });
      return response.contents as BlogListResponse[];
   } catch (error) {
      throw new Error("Failed to fetch data");
   }
};
export const getAllBlogsID = async () => {
   try {
      const response = await client.getList({
         // default is force-cache
         customRequestInit: {
            cache: "force-cache",
         },
         endpoint: "news",
      });
      const idArr = response.contents.map((res) => res.id);
      return idArr;
   } catch (error) {
      throw new Error("Failed to fetch data");
   }
};
type BlogResponse = {
   title: string;
};
export const getBlogById = async (id: string) => {
   try {
      const response = await client.get({
         endpoint: "news",
         contentId: id,
      });
      return response as BlogResponse;
   } catch (error) {
      throw new Error("Failed to fetch data");
   }
};
