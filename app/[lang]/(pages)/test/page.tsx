import { Locale } from "@/i18n-config";

const Home = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
   const { lang } = await params;
   return <p>test</p>;
};

export default Home;
