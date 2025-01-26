"use client";
import { memo, useRef } from "react";
import PlyrCustom from "./PlyrCustom";

type Props = {
  url: string;
  poster?: string;
  provider?: string;
  [key: string]: any;
};
function PlyrVideo({ url, poster, provider, ...props }: Props) {
  const plyrRef = useRef<any>(null);

  const plyrProps = {
    source: {
      type: "video" as "audio" | "video",
      title: "",
      sources: [
        {
          src: url,
          provider,
        },
      ],
      poster: poster || undefined,
    },
    options: {
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "fullscreen",
      ],
      youtube: {
        noCookie: true, // Enable privacy-enhanced mode
        rel: 0, // Don't show related videos
        showinfo: 0,
        modestbranding: 1,
      },
    },
  };

  return <div {...props}>{<PlyrCustom ref={plyrRef} {...plyrProps} />}</div>;
}

export default memo(PlyrVideo);
