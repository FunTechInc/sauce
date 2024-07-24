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
easing
===============================================*/
export const TRIGGERTIMING = "top bottom-=8%";
export const INTERSECTIONTIMING = "-8% 0px";

export const DURATION = {
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
ROUTES
===============================================*/
export type RoutePaths = "sample";
export type RouteProps = {
   href: string;
   title: string;
};

const ROUTES: Record<RoutePaths, RouteProps> = {
   sample: {
      href: "/sample",
      title: "sample",
   },
};

/**
 * @param key - Key to get routing data
 */
export const getRoute = (key: RoutePaths) => ROUTES[key];

/**
 * @param keys - Array of keys to get routing data
 */
export const getRoutes = (keys?: RoutePaths[]): Array<RouteProps> => {
   if (keys === undefined) {
      return Object.values(ROUTES);
   }
   return keys.map((key) => ROUTES[key]);
};

export const getRoutePaths = () => Object.keys(ROUTES) as RoutePaths[];
