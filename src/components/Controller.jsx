import React from "react";
import "../styles/Controller.scss";

const Controller = (props) => {
  const { drumKey, volume, handleVolumeChange, power } = props;
  return (
    <div className="controller">
      <button className="turn">{power ? "OFF" : "ON"}</button>
      <div id="display">
        <p>{drumKey}</p>
      </div>
      <input
        className="volume"
        max="1"
        min="0"
        step="0.01"
        type="range"
        value={volume}
        onChange={handleVolumeChange}
      />
      <div className="display-controller">
        <p className="volume-text">Volume: %{Math.round(volume * 100)}</p>
      </div>
    </div>
  );
};

export default Controller;
