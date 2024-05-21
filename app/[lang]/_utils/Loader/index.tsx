"use client";

import { VideoHTMLAttributes, useState } from "react";
import Image, { ImageProps } from "next/image";
import { LowPowerVideo, Loader, LowPowerVideoProps } from "@funtech-inc/spice";
import s from "./loader.module.scss";

const FILL_STYLE = {
   position: "absolute",
   width: "100%",
   height: "100%",
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
   color: "transparent",
} as React.CSSProperties;

export const VideoLoader = (
   props: VideoHTMLAttributes<HTMLVideoElement> & { fill?: boolean }
) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { fill, style, ...rest } = props;
   const fillStyle = fill ? { ...FILL_STYLE, ...style } : style;
   return (
      <div className={fill ? s.fillContainer : s.container}>
         <video
            {...rest}
            style={fillStyle}
            onCanPlay={() => setIsLoaded(true)}></video>
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </div>
   );
};

export const LowPowerVideoLoader = (
   props: LowPowerVideoProps & { fill?: boolean }
) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { fill, style, ...rest } = props;
   const fillStyle = fill ? { ...FILL_STYLE, ...style } : style;
   return (
      <div className={fill ? s.fillContainer : s.container}>
         <LowPowerVideo
            {...rest}
            style={fillStyle}
            onCanPlay={() => setIsLoaded(true)}></LowPowerVideo>
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </div>
   );
};

export const ImageLoader = (props: ImageProps) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { alt, fill, ...rest } = props;
   return (
      <div className={fill ? s.fillContainer : s.container}>
         <Image
            {...rest}
            alt={alt || ""}
            fill={fill}
            onLoad={() => setIsLoaded(true)}
         />
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </div>
   );
};

export { Loader } from "@funtech-inc/spice";
