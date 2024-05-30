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

const LoaderContainer = ({
   fill,
   children,
}: {
   fill?: boolean;
   children: React.ReactNode;
}) => {
   return (
      <div className={fill ? s.fillContainer : s.container}>{children}</div>
   );
};

export const VideoLoader = (props: VideoProps) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { fill } = props;
   return (
      <LoaderContainer fill={fill}>
         <Video {...props} onCanPlay={() => setIsLoaded(true)}></Video>
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </LoaderContainer>
   );
};

export const LowPowerVideoLoader = (props: LowPowerVideoProps) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { fill } = props;
   return (
      <LoaderContainer fill={fill}>
         <LowPowerVideo
            {...props}
            onCanPlay={() => setIsLoaded(true)}></LowPowerVideo>
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </LoaderContainer>
   );
};

export const ImageLoader = (props: ImageProps) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { alt, fill, ...rest } = props;
   return (
      <LoaderContainer fill={fill}>
         <Image
            {...rest}
            alt={alt || ""}
            fill={fill}
            onLoad={() => setIsLoaded(true)}
         />
         {!isLoaded && <Loader delay={0} className={s.loader} />}
      </LoaderContainer>
   );
};
