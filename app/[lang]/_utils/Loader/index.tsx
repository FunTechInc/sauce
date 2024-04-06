"use client";

import { VideoHTMLAttributes, useState } from "react";
import Image, { ImageProps } from "next/image";
import { LowPowerVideo, Loader } from "@funtech-inc/spice";
import s from "./loader.module.scss";

export const VideoLoader = (props: VideoHTMLAttributes<HTMLVideoElement>) => {
   const [isLoaded, setIsLoaded] = useState(false);
   return (
      <div className={s.loaderContainer}>
         <video {...props} onCanPlay={() => setIsLoaded(true)}></video>
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </div>
   );
};

interface LowPowerVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
   fallback: React.ReactNode;
}

export const LowPowerVideoLoader = (props: LowPowerVideoProps) => {
   const [isLoaded, setIsLoaded] = useState(false);
   return (
      <div className={s.loaderContainer}>
         <LowPowerVideo
            {...props}
            onCanPlay={() => setIsLoaded(true)}></LowPowerVideo>
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </div>
   );
};

export const ImageLoader = (props: ImageProps) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { alt, ...rest } = props;
   return (
      <div className={s.loaderContainer}>
         <Image {...rest} alt={alt || ""} onLoad={() => setIsLoaded(true)} />
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </div>
   );
};

export { Loader } from "@funtech-inc/spice";
