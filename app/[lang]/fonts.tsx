import { Poppins } from "next/font/google";
const poppins = Poppins({
   subsets: ["latin"],
   weight: ["700"],
   variable: "--font-poppins",
});
import { Noto_Sans_JP } from "next/font/google";
const noto = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto" });

export { poppins, noto };

export const FF_EN = "ff_en";

export const setFF = () => {
   return FF_EN;
};
