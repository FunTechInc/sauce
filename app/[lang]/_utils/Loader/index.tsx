"use client";

import { VideoHTMLAttributes, useState } from "react";
import Image, { ImageProps } from "next/image";
import { LowPowerVideo, Loader, LowPowerVideoProps } from "@funtech-inc/spice";
import s from "./loader.module.scss";

export const VideoLoader = (props: VideoHTMLAttributes<HTMLVideoElement>) => {
   const [isLoaded, setIsLoaded] = useState(false);
   return (
      <div className={s.container}>
         <video {...props} onCanPlay={() => setIsLoaded(true)}></video>
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </div>
   );
};
export const LowPowerVideoLoader = (props: LowPowerVideoProps) => {
   const [isLoaded, setIsLoaded] = useState(false);
   return (
      <div className={s.container}>
         <LowPowerVideo
            {...props}
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
