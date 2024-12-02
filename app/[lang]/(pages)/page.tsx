import { Locale } from "@/i18n-config";
import HomeContent from "./_home";

const Home = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
   const { lang } = await params;
   return <HomeContent lang={lang} />;
};

export default Home;
