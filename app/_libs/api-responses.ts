import { createClient } from "microcms-js-sdk";

/*===============================================
microCMS
===============================================*/
const client = createClient({
   serviceDomain: process.env.SERVICE_DOMAIN!,
   apiKey: process.env.API_KEY!,
});

type TBlogList = {
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
         endpoint: "blogs",
      });
      return response.contents as TBlogList[];
   } catch (error) {
      throw new Error("Failed to fetch data");
   }
};
type TBlog = {
   title: string;
};
export const getBlogById = async (id: string) => {
   try {
      const response = await client.get({
         endpoint: "blogs",
         contentId: id,
      });
      return response as TBlog;
   } catch (error) {
      throw new Error("Failed to fetch data");
   }
};
