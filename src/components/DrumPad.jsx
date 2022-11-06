import React, { useEffect } from "react";
import "../styles/DrumPad.scss";

const DrumPad = (props) => {
  const { id, url, drumKey } = props;

  function handlePlayAudio(key) {
    document.getElementById(key).play();
  }

  useEffect(() => {
    const keyEvent = ({ key }) => {
      key.toUpperCase() === drumKey && handlePlayAudio(drumKey);
    };

    window.addEventListener("keypress", keyEvent);

    return () => {
      window.removeEventListener("keypress", keyEvent);
    };
  }, [drumKey]);

  useEffect(() => {
    const keyEvent = () => {
      handlePlayAudio(drumKey);
    };

    window.addEventListener("click", keyEvent);

    return () => {
      window.removeEventListener("click", keyEvent);
    };
  }, [drumKey]);

  return (
    <div className="drum-pad" id={id}>
      <audio className="clip" id={drumKey} src={url}></audio>
      {drumKey}
    </div>
  );
};

export default DrumPad;
