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

/*===============================================
Meta ※言語対応する場合はdictionariesのjsonで管理する
===============================================*/
export const SITENAME = "(hidden)sauce";
export const SITEDESCRIPTION = "this is our「秘伝のタレ」, means hidden sauce.";

/*===============================================
Size
===============================================*/
export const WINDOWSM = 560;
export const WINDOWMD = 960;
export const WINDOWLG = 1120;

/*===============================================
Easing
===============================================*/
export const TRIGGERTIMING = "top bottom-=8%";
export const INTERSECTIONTIMING = "-8% 0px";

export const DURATION = {
   strong: 1.2,
   strongDecelerate: 1,
   strongAccelerate: 0.8,
   emphasized: 0.5,
   emphasizedDecelerate: 0.4,
   emphasizedAccelerate: 0.2,
   standard: 0.3,
   standardDecelerate: 0.25,
   standardAccelerate: 0.2,
};

export const EASE = "power3";
export const EASING = {
   duration: DURATION.emphasized,
   ease: `${EASE}.out`,
};
export const STAGGERTIMING = 0.1;

/*===============================================
External Links
===============================================*/
export const EXTERNAL_LINKS = {
   instagram: "https://www.instagram.com/",
};

/*===============================================
Constant Routes
===============================================*/
export type ConstantRouteKeys = "sample";
export type ConstantRouteProps = {
   pathname: string;
   title: string;
};

const CONSTANT_ROUTES: Record<ConstantRouteKeys, ConstantRouteProps> =
   Object.freeze({
      sample: {
         pathname: "/sample",
         title: "sample",
      },
   });

/**
 * @param key - Key to get routing data
 */
export const getConstantRoute = (key: ConstantRouteKeys) =>
   CONSTANT_ROUTES[key];

/**
 * @param keys - Array of keys to get routing data
 */
export const getConstantRoutes = (
   ...keys: ConstantRouteKeys[]
): ConstantRouteProps[] => {
   if (keys.length === 0) {
      return Object.values(CONSTANT_ROUTES);
   }
   return keys.map((key) => CONSTANT_ROUTES[key]);
};

export const getConstantRouteKeys = (): ConstantRouteKeys[] => {
   return Object.keys(CONSTANT_ROUTES) as ConstantRouteKeys[];
};
