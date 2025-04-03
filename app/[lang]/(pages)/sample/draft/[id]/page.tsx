import * as CMS from "@/app/[lang]/_libs/cms";
import { HTMLConverter } from "@/components/HTMLConverter";
import type { Metadata } from "next";
import { Inner } from "@/app/[lang]/_layout/Inner";
import s from "@/css/article.module.scss";

export async function generateMetadata({
   params,
}: {
   params: Promise<{ id: string }>;
}): Promise<Metadata> {
   const { draftKey } = await CMS.getDraftkey();
   const { id } = await params;
   const blog = await CMS.get({
      contentId: id,
      endpoint: "news",
      draftKey: draftKey,
   });
   return {
      title: "プレビュー | " + blog.title,
      robots: "noindex",
   };
}

const Single = async ({ params }: { params: Promise<{ id: string }> }) => {
   const { draftKey } = await CMS.getDraftkey();

   const { id } = await params;

   const content = await CMS.get({
      endpoint: "news",
      contentId: id,
      draftKey: draftKey,
   });

   return (
      <article style={{ margin: "320rem 0" }}>
         <Inner width="narrow">
            <p
               style={{
                  fontSize: "16rem",
                  textDecoration: "underline",
                  marginBottom: "40rem",
               }}>
               下書きモード
            </p>
            <h1 style={{ marginBottom: "120rem", fontSize: "40rem" }}>
               {content.title}
            </h1>
            <div className={s.article}>
               <div>
                  <HTMLConverter>{content.content}</HTMLConverter>
               </div>
            </div>
         </Inner>
      </article>
   );
};

export default Single;
