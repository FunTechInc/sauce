import { redirect } from "next/navigation";
import { draftMode } from "next/headers";

export async function GET() {
   const draft = await draftMode();
   draft.disable();
   redirect("/sample");
}
