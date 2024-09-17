"use client";

import { forwardRef, useState } from "react";
import Image, { ImageProps } from "next/image";
import { Video, VideoProps, Loader } from "@funtech-inc/spice";

const WAVE_COLOR = "#ffffff";
const BG_COLOR = "#F0F0F0";

const STYLES: {
   fillContainer: React.CSSProperties;
   container: React.CSSProperties;
   loader: React.CSSProperties;
} = {
   fillContainer: {
      position: "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
   },
   container: {
      position: "relative",
      zIndex: 1,
   },
   loader: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
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

export const VideoLoader = forwardRef<
   HTMLVideoElement,
   VideoProps & ContainerProps
>((props, ref) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { fill, containerProps, containerRef, ...rest } = props;
   return (
      <LoaderContainer
         ref={containerRef}
         fill={fill}
         containerProps={containerProps}>
         <Video
            ref={ref}
            fill={fill}
            onCanPlay={() => setIsLoaded(true)}
            {...rest}
         />
         {!isLoaded && (
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
   const [isLoaded, setIsLoaded] = useState(false);
   const { alt, fill, containerProps, containerRef, ...rest } = props;
   return (
      <LoaderContainer
         ref={containerRef}
         fill={fill}
         containerProps={containerProps}>
         <Image
            ref={ref}
            alt={alt || ""}
            fill={fill}
            onLoad={() => setIsLoaded(true)}
            {...rest}
         />
         {!isLoaded && (
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
