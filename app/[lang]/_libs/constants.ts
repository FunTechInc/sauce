export const ISDEV = process.env.NODE_ENV === "development";
export const ISPROD = process.env.NODE_ENV === "production";
export const ISCLIENT = typeof document !== "undefined";
export const ISSERVER = !ISCLIENT;
export const SITEURL = process.env.NEXT_PUBLIC_SITE_URL
   ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
   : null;

if (!SITEURL) {
   throw new Error("NEXT_PUBLIC_SITE_URL is not set");
}
export const SITEORIGIN = SITEURL.origin;
const DEV_URL = "http://localhost:3000/";
// const DEV_URL = "http://192.168.100.26:3000/";
export const HREF = ISDEV ? DEV_URL : SITEURL;

/*===============================================
meta ※言語対応する場合はdictionariesのjsonで管理する
===============================================*/
export const SITENAME = "(hidden)sauce";
export const SITEDESCRIPTION = "this is our「秘伝のタレ」, means hidden sauce.";

/*===============================================
size
===============================================*/
export const WINDOWSM = 560;
export const WINDOWMD = 960;
export const WINDOWLG = 1120;

/*===============================================
animation
===============================================*/
export const TRIGGERTIMING = "top bottom-=10%";
export const INTERSECTIONTIMING = "-10% 0px";
export const DURATIONVAL = 0.8;
export const EASEVAL = "power3";
export const STAGGERTIMING = 0.1;
