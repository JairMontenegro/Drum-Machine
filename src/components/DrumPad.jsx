import "../styles/DrumPad.scss";

const DrumPad = (props) => {
  const { id, url, drumKey, onClickSound } = props;
  return (
    <button className="drum-pad" id={id} onClick={onClickSound}>
      <audio className="clip" id={drumKey} src={url}></audio>
      {drumKey}
    </button>
  );
};

export default DrumPad;
