import "server-only";

const routing = {
   sample: {
      href: "/sample",
      title: "sample",
   },
};

type Routing = keyof typeof routing;

/**
 * @param key - Key to get routing data
 */
export const getRouting = (key: Routing) => routing[key];

/**
 * @param keys - Array of keys to get routing data
 * @param isAll - If true, return all routing data
 */
export const getRoutingArr = (
   keys: Routing[] | null,
   isAll: boolean = false
): Array<{ href: string; title: string }> => {
   if (isAll || keys === null) {
      return Object.values(routing);
   }
   return keys.map((key) => routing[key]);
};
