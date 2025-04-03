import { redirect } from "next/navigation";
import * as CMS from "@/app/[lang]/_libs/cms";
import { draftMode } from "next/headers";

// http://localhost:3000/ja/sample/draft?draftKey=xxxx&id=xxxx

export async function GET(request: Request) {
   const draft = await draftMode();
   draft.enable();
   const { post, draftKey } = await CMS.getDraftFromRequest<CMS.News>({
      request,
      endpoint: "news",
   });
   CMS.setDraftkey(draftKey);
   redirect("draft/" + post.id);
}
