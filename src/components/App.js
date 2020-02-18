import React, { useState } from "react";
import "./App.css";

import { urls } from "../urls/Urls";

import ButtonGroup from "./ButtonGroup";
import Video from "./Video";
const App = () => {
  const [currentVid, setCurrentVid] = useState(0);
  const [currentVideoSetting, setCurrentVideoSetting] = useState({
    key: urls[currentVid],
    source: `/asset/video/${urls[currentVid]}.mp4`,
    track: `/asset/sub/${urls[currentVid]}.vtt`
  });
  const [speed, setSpeed] = useState(1);
  const [onRun, setOnRun] = useState(false);

  const onFast = () => {
    setSpeed(speed + 1);
  };

  const onSlow = () => {
    if (speed > 1) {
      setSpeed(speed - 1);
    }
  };

  const onReset = () => {
    setSpeed(1);
  };

  const onTriggle = () => {
    setOnRun(current => !onRun);
  };

  const onNext = () => {
    if (currentVid < urls.length - 1) {
      setCurrentVid(currentVid + 1);
      setCurrentVideoSetting(newSettings => ({
        key: urls[currentVid],
        source: `/asset/video/${urls[currentVid]}.mp4`,
        track: `/asset/sub/${urls[currentVid]}.vtt`
      }));
      onReset();
      setOnRun(false);
    }
  };

  const onPrev = () => {
    if (currentVid > 0) {
      setCurrentVid(currentVid - 1);
      setCurrentVideoSetting(newSettings => ({
        key: urls[currentVid],
        source: `/asset/video/${urls[currentVid]}.mp4`,
        track: `/asset/sub/${urls[currentVid]}.vtt`
      }));
      onReset();
      setOnRun(false);
    }
  };

  return (
    <div className="wrapper">
      <div className="static">
        <p className="speed">
          Speed: <span>{speed}</span>
        </p>
        <button className="btn btn-05" onClick={onPrev}>
          Previous
        </button>
        <button className="btn btn-06" onClick={onNext}>
          Next
        </button>
      </div>

      <h3 id="title">{urls[currentVid]}</h3>
      <Video settings={currentVideoSetting} speed={speed} onRun={onRun} />
      <ButtonGroup
        onFast={onFast}
        onReset={onReset}
        onSlow={onSlow}
        onTriggle={onTriggle}
      />
    </div>
  );
};

export default App;
