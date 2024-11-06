"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
import { Video, VideoProps, Loader } from "@funtech-inc/spice";

const WAVE_COLOR = "#ffffff";
const BG_COLOR = "#DCDCDC";

const FILL_STYLE = {
   position: "absolute",
   width: "100%",
   height: "100%",
   inset: 0,
} as React.CSSProperties;

const STYLES: {
   fillContainer: React.CSSProperties;
   container: React.CSSProperties;
   loader: React.CSSProperties;
} = {
   fillContainer: {
      ...FILL_STYLE,
      zIndex: 1,
   },
   container: {
      position: "relative",
      zIndex: 1,
   },
   loader: {
      ...FILL_STYLE,
      zIndex: -1,
      backgroundColor: BG_COLOR,
   },
};

type ContainerProps = {
   containerProps?: Omit<React.HTMLAttributes<HTMLDivElement>, "children">;
   containerRef?: React.RefObject<HTMLDivElement>;
};

const LoaderContainer = forwardRef<
   HTMLDivElement,
   {
      fill?: boolean;
      children: React.ReactNode;
   } & ContainerProps
>(({ fill, children, containerProps }, ref) => {
   const { style, ...rest } = containerProps || {};

   return (
      <div
         ref={ref}
         style={{
            ...(fill ? STYLES.fillContainer : STYLES.container),
            ...style,
         }}
         {...rest}>
         {children}
      </div>
   );
});
LoaderContainer.displayName = "LoaderContainer";

const useLoader = () => {
   const [isLoaded, setIsLoaded] = useState(false);
   const [showLoader, setShowLoader] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         if (!isLoaded) setShowLoader(true);
      }, 300);
      return () => clearTimeout(timer);
   }, [isLoaded]);

   const handleLoad = useCallback(() => {
      setIsLoaded(true);
      setShowLoader(false);
   }, []);

   return { showLoader, handleLoad };
};

export const VideoLoader = forwardRef<
   HTMLVideoElement,
   VideoProps & ContainerProps
>((props, ref) => {
   const { fill, containerProps, containerRef, ...rest } = props;

   const { showLoader, handleLoad } = useLoader();

   return (
      <LoaderContainer
         ref={containerRef}
         fill={fill}
         containerProps={containerProps}>
         <Video ref={ref} fill={fill} onCanPlay={handleLoad} {...rest} />
         {showLoader && (
            <Loader
               skeleton={{ waveColor: WAVE_COLOR }}
               delay={0}
               style={STYLES.loader}
            />
         )}
      </LoaderContainer>
   );
});
VideoLoader.displayName = "VideoLoader";

export const ImageLoader = forwardRef<
   HTMLImageElement,
   ImageProps & ContainerProps
>((props, ref) => {
   const { alt, fill, containerProps, containerRef, ...rest } = props;

   const { showLoader, handleLoad } = useLoader();

   return (
      <LoaderContainer
         ref={containerRef}
         fill={fill}
         containerProps={containerProps}>
         <Image
            ref={ref}
            alt={alt || ""}
            fill={fill}
            onLoad={handleLoad}
            {...rest}
         />
         {showLoader && (
            <Loader
               skeleton={{ waveColor: WAVE_COLOR }}
               delay={0}
               style={STYLES.loader}
            />
         )}
      </LoaderContainer>
   );
});
ImageLoader.displayName = "ImageLoader";
