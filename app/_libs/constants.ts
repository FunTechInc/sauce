export const ISDEV = process.env.NODE_ENV === "development";
export const ISPROD = process.env.NODE_ENV === "production";

export const ISCLIENT = typeof document !== "undefined";
export const ISSERVER = !ISCLIENT;

export const SITEURL = new URL(process.env.NEXT_PUBLIC_SITE_URL!);
export const SITEORIGIN = SITEURL.origin;

export const WINDOWSM = 560;
export const WINDOWMD = 960;
export const WINDOWLG = 1120;

export const TRIGGERTIMING = "top bottom-=10%";
export const INTERSECTIONTIMING = "-10% 0px";
export const DURATIONVAL = 0.8;
export const EASEVAL = "power3";
export const STAGGERTIMING = 0.1;
