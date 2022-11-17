import React from "react";
import "../styles/Controller.scss";

const Controller = ({ drumKey, volume, handleVolumeChange }) => {
  return (
    <div className="controller">
      <button className="turn">on/off</button>
      <div id="display">
        <p>{drumKey}</p>
      </div>
      <label orient="270deg" type="range" for="band" before="-5" after="5">
        0
      </label>

      <input
        orient="270deg"
        className="volume"
        max="1"
        min="0"
        step="0.01"
        type="range"
        value={volume}
        onChange={handleVolumeChange}
      />
      <p className="volume-text">Volume: %{Math.round(volume * 100)}</p>
    </div>
  );
};

export default Controller;
