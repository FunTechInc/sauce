import { redirect } from "next/navigation";
import * as CMS from "@/app/[lang]/_libs/cms";
import { draftMode, cookies } from "next/headers";

/*===============================================
http://localhost:3000/ja/sample/draft?draftKey=xxxx&id=xxxx
===============================================*/

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const draftKey = searchParams.get("draftKey");
   const id = searchParams.get("id");

   if (!draftKey || !id) {
      return new Response("Invalid draftKey", { status: 401 });
   }

   const cookieStore = await cookies();
   cookieStore.set("draftKey", draftKey);

   const post = await CMS.get<CMS.News>({
      contentId: id,
      endpoint: "news",
      draftKey: draftKey,
   });

   if (!post) {
      return new Response("Invalid id", { status: 401 });
   }

   const draft = await draftMode();
   draft.enable();

   redirect("draft/" + post.id);
}
