"use client";

import { forwardRef, useState } from "react";
import Image, { ImageProps } from "next/image";
import { Video, VideoProps, Loader } from "@funtech-inc/spice";

const WAVE_COLOR = "rgba(208,208,208,0.24)";
const BG_COLOR = "#222222";

const STYLES: {
   fillContainer: React.CSSProperties;
   container: React.CSSProperties;
   loader: React.CSSProperties;
} = {
   fillContainer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
   },
   container: {
      position: "relative",
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
   HTMLDivElement,
   VideoProps & ContainerProps
>((props, ref) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { fill, containerProps, ...rest } = props;
   return (
      <LoaderContainer ref={ref} fill={fill} containerProps={containerProps}>
         <Video fill={fill} onCanPlay={() => setIsLoaded(true)} {...rest} />
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
   HTMLDivElement,
   ImageProps & ContainerProps
>((props, ref) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { alt, fill, containerProps, ...rest } = props;
   return (
      <LoaderContainer ref={ref} fill={fill} containerProps={containerProps}>
         <Image
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
