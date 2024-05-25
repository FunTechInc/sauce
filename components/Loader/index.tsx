"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import {
   LowPowerVideo,
   LowPowerVideoProps,
   Video,
   VideoProps,
} from "@funtech-inc/spice";
import { Loader } from "./Loader";
import s from "./index.module.scss";

export const VideoLoader = (props: VideoProps) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { fill } = props;
   return (
      <div className={fill ? s.fillContainer : s.container}>
         <Video {...props} onCanPlay={() => setIsLoaded(true)}></Video>
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </div>
   );
};

export const LowPowerVideoLoader = (props: LowPowerVideoProps) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { fill } = props;
   return (
      <div className={fill ? s.fillContainer : s.container}>
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
