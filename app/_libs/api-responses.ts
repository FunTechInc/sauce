import { createClient } from "microcms-js-sdk";

export async function getContents() {
   const client = createClient({
      serviceDomain: process.env.SERVICE_DOMAIN || "",
      apiKey: process.env.API_KEY || "",
   });

   const response = await client.getList({
      customRequestInit: {
         cache: "force-cache",
      },
      endpoint: "blogs",
   });

   return response.contents;
}
