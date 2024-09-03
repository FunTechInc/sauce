import { SampleLayout } from "@/app/[lang]/_layout/SampleLayout";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/app/[lang]/_libs/get-dictionary";
import { AutoScrollContainer } from "@funtech-inc/spice";

const HomeContent = async ({ lang }: { lang: Locale }) => {
   const dictionary = await getDictionary(lang);
   return (
      <SampleLayout>
         <AutoScrollContainer speed={-1}>
            <p style={{ fontSize: "24vw" }}>{dictionary.title}</p>
         </AutoScrollContainer>
      </SampleLayout>
   );
};

export default HomeContent;
