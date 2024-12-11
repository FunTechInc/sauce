import { redirect } from "next/navigation";
import * as CMS from "@/app/[lang]/_libs/cms";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const draftKey = searchParams.get("draftKey");
   const id = searchParams.get("id");

   if (!id || !draftKey) {
      return new Response("Invalid token", { status: 401 });
   }

   const post = await CMS.get({
      contentId: id,
      endpoint: "news",
      draftKey: draftKey,
   });

   if (!post) {
      return new Response("Invalid slug", { status: 401 });
   }

   await CMS.setDraftkey(draftKey);

   redirect(post.id);
}
