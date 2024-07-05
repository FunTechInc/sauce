import { i18n, type Locale } from "../../i18n-config";
import AppSetup from "./app-setup";
import { MainLayout } from "@/app/[lang]/_layout/MainLayout";
import { poppins, noto } from "./fonts";
import "@/css/reset.css";
import "@/css/global.scss";
import type { Metadata } from "next";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";

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
   params: { lang: Locale };
}): Promise<Metadata> {
   const dictionary = await getDictionary(params.lang);
   return {
      title: {
         default: dictionary.meta.title,
         template: `%s | ${dictionary.meta.title}`,
      },
      description: dictionary.meta.description,
      twitter: {
         card: "summary_large_image",
         title: dictionary.meta.title,
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

const RootLayout = ({
   children,
   params: { lang },
}: {
   children: React.ReactNode;
   params: { lang: Locale };
}) => {
   return (
      <html lang={lang} className={`${poppins.variable} ${noto.variable}`}>
         <body style={{ opacity: 0 }} className={noto.className}>
            <MainLayout>{children}</MainLayout>
         </body>
         <AppSetup />
      </html>
   );
};

export default RootLayout;
