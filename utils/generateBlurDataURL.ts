import "server-only"; //must be server-only

const lqip = require("lqip-modern");

type BlurDataURLReturnType<T> = T extends string[] ? string[] : string;

/**
 * Generate a base64 encoded image data url for a given image path.
 * @param imagePath - The path to the image.
 * @param resize - The size of the image to generate the blur data url. default:`10`
 * @returns A base64 encoded image data url.
 */
async function generateBlurDataURL<T extends string | string[]>(
   imagePath: T,
   resize: number = 10
): Promise<BlurDataURLReturnType<T>> {
   const processData = (data: any) =>
      Array.isArray(data)
         ? data.map((item) => item.metadata.dataURIBase64)
         : data.metadata.dataURIBase64;

   const data = await lqip(imagePath, { resize });
   return processData(data) as BlurDataURLReturnType<T>;
}

export { generateBlurDataURL };
