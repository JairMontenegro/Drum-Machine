import "../styles/DrumPad.scss";

const DrumPad = (props) => {
  const { id, url, drumKey, onClickSound, volume, onButton } = props;

  const handleVolume = (identifier) => {
    const audioVolume = document.getElementById(identifier);
    if (audioVolume) {
      audioVolume.volume = volume;
    }
  };

  return (
    <button
      className="drum-pad"
      id={onButton ? "none" : id}
      onClick={onClickSound}
    >
      {handleVolume(drumKey)}
      <audio className="clip" id={drumKey} src={onButton ? "#" : url}></audio>
      {drumKey}
    </button>
  );
};

export default DrumPad;
