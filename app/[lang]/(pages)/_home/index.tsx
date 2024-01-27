import { SampleLayout } from "@/app/[lang]/_layout/SampleLayout";
import { Magnet } from "./_components/Magnet";
import { Modal } from "./_components/Modal";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const HomeContent = async ({ lang }: { lang: Locale }) => {
   const dictionary = await getDictionary(lang);
   return (
      <SampleLayout>
         <p>いまの言語：{lang}</p>
         <Magnet title={dictionary.title} />
         <Modal />
      </SampleLayout>
   );
};

export default HomeContent;
