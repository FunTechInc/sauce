import "server-only"; //must be server-only

import { cookies } from "next/headers";
import { createClient } from "microcms-js-sdk";

// microCMS
const client = createClient({
   serviceDomain: process.env.SERVICE_DOMAIN!,
   apiKey: process.env.API_KEY!,
});

/*===============================================
const
===============================================*/
export const PER_PAGE = 1;

/*===============================================
types
===============================================*/
export type News = {
   id: string;
   title: string;
   content: string;
   publishedAt: string;
   category: {
      name: string;
      id: string;
   };
};
export type Categories = {
   id: string;
   name: string;
};

type Endpoint = "news" | "categories";

/*===============================================
api
===============================================*/
export const getList = async <T = News>({
   endpoint = "news",
   page = 1,
   perPage = PER_PAGE,
   category,
   exclude,
}: {
   endpoint: Endpoint;
   page?: number;
   perPage?: number;
   category?: string;
   exclude?: string;
}) => {
   const filters = [
      category ? `category[equals]${category}` : null,
      exclude ? `id[not_equals]${exclude}` : null,
   ]
      .filter(Boolean)
      .join("[and]");
   try {
      const response = await client.getList<T>({
         endpoint,
         queries: {
            offset: (page - 1) * perPage,
            limit: perPage,
            filters: filters,
         },
      });
      return response;
   } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
   }
};

export const getObject = async <T = News>({
   endpoint = "news",
}: {
   endpoint: Endpoint;
}) => {
   try {
      const response = await client.getObject<T>({
         endpoint,
      });
      return response;
   } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
   }
};

export const getAllContentIds = async ({
   endpoint = "news",
}: {
   endpoint: Endpoint;
}) => {
   try {
      const response = await client.getAllContentIds({
         endpoint,
      });
      return response;
   } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
   }
};

export const get = async <T = News>({
   endpoint = "news",
   contentId,
   draftKey,
}: {
   endpoint: Endpoint;
   contentId: string;
   draftKey?: string;
}) => {
   try {
      const response = await client.get<T>({
         endpoint: endpoint,
         contentId: contentId,
         queries: {
            draftKey: draftKey,
         },
      });
      return response;
   } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
   }
};

/*===============================================
draft mode
===============================================*/
export const getDraftFromRequest = async <T = News>({
   request,
   endpoint = "news",
}: {
   request: Request;
   endpoint: Endpoint;
}) => {
   const { searchParams } = new URL(request.url);
   const draftKey = searchParams.get("draftKey");
   const id = searchParams.get("id");

   if (!draftKey || !id) {
      throw new Error("Invalid draftKey");
   }

   const post = await get<T>({
      contentId: id,
      endpoint: endpoint,
      draftKey,
   });

   if (!post) {
      throw new Error("Invalid id");
   }

   return { post, draftKey };
};

export const getDraftkey = async () => {
   const cookieStore = await cookies();
   return cookieStore.get("draftKey")?.value;
};

export const setDraftkey = async (draftKey: string) => {
   const cookieStore = await cookies();
   cookieStore.set("draftKey", draftKey);
};
