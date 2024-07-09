import { Locale } from "@/i18n-config";
import HomeContent from "./_home";

const Home = async ({ params: { lang } }: { params: { lang: Locale } }) => {
   return <HomeContent lang={lang} />;
};

export default Home;
