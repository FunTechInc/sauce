import { i18n, type Locale } from "../../i18n-config";
import { AppSetup } from "@/components/AppSetup";
import { poppins, noto } from "../fonts";
import "@/css/reset.css";
import "@/css/global.scss";
import "lenis/dist/lenis.css";
import type { Metadata } from "next";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";
import classnames from "classnames";
import { Lenis } from "@/components/Lenis";

// Meta data
// const metadata: Metadata = {
//    title: {
//       default: SITENAME,
//       template: `%s | ${SITENAME}`,
//    },
//    description: SITEDESCRIPTION,
//    twitter: {
//       card: "summary_large_image",
//       title: SITENAME,
//       creator: "@funtech_inc",
//       siteId: "@funtech_inc",
//    },
//    alternates: {
//       canonical: "/",
//    },
// };
// export { metadata };

// Meta data ※i18n
export async function generateMetadata({
   params,
}: {
   params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
   const { lang } = await params;
   const { meta } = await getDictionary(lang);
   return {
      title: {
         default: meta.title,
         template: `%s | ${meta.title}`,
      },
      description: meta.description,
      twitter: {
         card: "summary_large_image",
         title: meta.title,
         creator: "@funtech_inc",
         siteId: "@funtech_inc",
      },
      alternates: {
         canonical: "/",
      },
   };
}

export async function generateStaticParams() {
   return i18n.locales.map((locale) => ({ lang: locale }));
}

const RootLayout = async ({
   children,
   params,
}: {
   children: React.ReactNode;
   params: Promise<{ lang: Locale }>;
}) => {
   const { lang } = await params;

   return (
      <html lang={lang} className={classnames(poppins.variable, noto.variable)}>
         <body style={{ opacity: 0 }} className={noto.className}>
            {children}
            <Lenis />
            <AppSetup />
         </body>
      </html>
   );
};

export default RootLayout;
