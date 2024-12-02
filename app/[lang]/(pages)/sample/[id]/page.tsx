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
   const { id } = await params;
   const blog = await CMS.get({ contentId: id, endpoint: "news" });
   return {
      title: blog.title,
   };
}

export async function generateStaticParams() {
   const news = await CMS.getAllContentIds({ endpoint: "news" });

   return news.map((id) => ({
      id: id,
   }));
}

const Single = async ({ params }: { params: Promise<{ id: string }> }) => {
   const { id } = await params;
   const content = await CMS.get({ endpoint: "news", contentId: id });
   return (
      <article style={{ margin: "320rem 0" }}>
         <Inner width="narrow">
            <div className={s.article}>
               <h1>{content.title}</h1>
               <div>
                  <HTMLConverter>{content.content}</HTMLConverter>
               </div>
            </div>
         </Inner>
      </article>
   );
};

export default Single;
