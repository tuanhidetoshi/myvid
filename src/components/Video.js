import React, { useEffect, useRef } from "react";
import { urls } from "../urls/Urls";

// useEffect(
//   currentVid => {
//     setCurrentVideoSetting(newSettings => ({
//       key: urls[currentVid],
//       source: `/asset/video/${urls[currentVid]}.mp4`,
//       track: `/asset/sub/${urls[currentVid]}.vtt`
//     }));
//   },
//   [currentVid]
// );

const Video = props => {
  const title = urls[props.current];
  const settings = {
    key: title,
    source: `/asset/video/${title}.mp4`,
    track: `/asset/sub/${title}.vtt`
  };
  const videoSpeed = props.speed;
  const run = props.onRun;

  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.playbackRate = videoSpeed;
    run ? videoRef.current.play() : videoRef.current.pause();
  });

  return (
    <video
      key={settings.key}
      width="1200"
      height="700"
      controls
      muted
      ref={videoRef}
    >
      <source src={settings.source} type="video/mp4" />
      <track
        src={settings.track}
        label="English"
        kind="subtitles"
        srcLang="en"
        default
      />
    </video>
  );
};

export default Video;
