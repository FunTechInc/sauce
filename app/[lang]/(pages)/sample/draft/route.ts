import { redirect } from "next/navigation";
import * as CMS from "@/app/[lang]/_libs/cms";

/*===============================================
http://localhost:3000/ja/sample/draft?draftKey=xxxx&id=xxxx
===============================================*/

export async function GET(request: Request) {
   const { response, draftKey } = await CMS.getDraftByRequest({
      request,
      endpoint: "news",
   });
   await CMS.setDraftkey(draftKey);
   redirect(response.id);
}
