import "server-only"; //must be server-only

import { draftMode, cookies } from "next/headers";
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
export type NewsType = {
   id: string;
   title: string;
   content: string;
   publishedAt: string;
   category: {
      name: string;
      id: string;
   };
};
export type CategoriesType = {
   id: string;
   name: string;
};

type Endpoint = "news" | "categories";

/*===============================================
api
===============================================*/
export const getList = async <T = NewsType>({
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
      throw new Error("Failed to fetch data");
   }
};

export const getObject = async <T = NewsType>({
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
      throw new Error("Failed to fetch data");
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
      throw new Error("Failed to fetch data");
   }
};

export const get = async <T = NewsType>({
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
      throw new Error("Failed to fetch data");
   }
};

/*===============================================
draft mode
===============================================*/
export const getDraftByRequest = async <T = NewsType>({
   request,
   endpoint = "news",
}: {
   request: Request;
   endpoint: Endpoint;
}) => {
   const { searchParams } = new URL(request.url);
   const draftKey = searchParams.get("draftKey");
   const id = searchParams.get("id");

   if (!id || !draftKey) {
      throw new Error("Invalid token");
   }

   const response = await get<T>({
      contentId: id,
      endpoint: endpoint,
      draftKey: draftKey,
   });

   if (!response) {
      throw new Error("Invalid contentId");
   }

   return { response, draftKey, id };
};

export const setDraftkey = async (draftKey: string) => {
   const draft = await draftMode();
   const cookieStore = await cookies();
   draft.enable();
   cookieStore.set("draftKey", draftKey);
};

export const getDraftkey = async () => {
   const { isEnabled } = await draftMode();
   const cookieStore = await cookies();
   const draftKey = isEnabled ? cookieStore.get("draftKey")?.value : undefined;
   return { draftKey, isDraftMode: isEnabled };
};
