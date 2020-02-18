import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";

const Video = props => {
  const { key, source, track } = props.settings;
  const videoSpeed = props.speed;
  const run = props.onRun;

  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.playbackRate = videoSpeed;
    run ? videoRef.current.play() : videoRef.current.pause();
  });

  return (
    <video key={key} width="1200" height="700" controls muted ref={videoRef}>
      <source src={source} type="video/mp4" />
      <track
        src={track}
        label="English"
        kind="subtitles"
        srcLang="en"
        default
      />
    </video>
  );
};

export default Video;
