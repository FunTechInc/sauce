"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
import { Video, VideoProps, Loader } from "@funtech-inc/spice";

const WAVE_COLOR = "#ffffff";
const BG_COLOR = "#E8E8E8";

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
      zIndex: 0,
   },
   container: {
      position: "relative",
      zIndex: 0,
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

const ImageContainer = ({
   fill,
   children,
   visible,
}: {
   fill?: boolean;
   children: React.ReactNode;
   visible: boolean;
}) => {
   return (
      <div
         style={{
            ...(fill ? STYLES.fillContainer : STYLES.container),
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s",
         }}>
         {children}
      </div>
   );
};

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

const Skelton = ({ visible }: { visible: boolean }) => {
   return (
      <Loader
         skeleton={{ waveColor: WAVE_COLOR }}
         delay={0}
         style={{
            ...STYLES.loader,
            visibility: visible ? "visible" : "hidden",
         }}
      />
   );
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
         <ImageContainer fill={fill} visible={!showLoader}>
            <Video
               ref={ref}
               fill={fill}
               onLoadedMetadata={handleLoad}
               onLoadedData={handleLoad}
               onCanPlay={handleLoad} // for autoPlay
               {...rest}
            />
         </ImageContainer>
         <Skelton visible={showLoader} />
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
         <ImageContainer fill={fill} visible={!showLoader}>
            <Image
               ref={ref}
               alt={alt || ""}
               fill={fill}
               onLoad={handleLoad}
               {...rest}
            />
         </ImageContainer>
         <Skelton visible={showLoader} />
      </LoaderContainer>
   );
});
ImageLoader.displayName = "ImageLoader";
