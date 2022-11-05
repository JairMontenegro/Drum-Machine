import React from "react";
import "../styles/DrumPad.scss";

const DrumPad = (props) => {
  const { id, url } = props;
  return (
    <button className="drum-pad" id={id}>
      <audio id={props.children.toString()} src={url}></audio>
      {props.children}
    </button>
  );
};

export default DrumPad;
