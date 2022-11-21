import { useEffect, useState } from "react";
import "./App.scss";
import DrumPad from "./components/DrumPad";
import dataDrumPad from "./data/DrumPad";
import Footer from "./components/footer.jsx";
import Controller from "./components/Controller";
import fileAudio from "./sound/start.mp3";

function App() {
  const [volume, setVolume] = useState(1.0);
  const [drumKey, setDrumKey] = useState("");
  const [on, setOn] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const transform = event.key.toUpperCase();
      const searchId = dataDrumPad.map((find) => {
        return find.drumKey === transform ? find.id : "";
      });
      start(transform, searchId);
    });
  }, []);

  const start = (identifier, drumId) => {
    const audio = document.getElementById(identifier);
    audio.play();
    setDrumKey(drumId);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const startAudio = new Audio(fileAudio);

  const turnOff = () => {
    setOn(!on);
    if (on) {
      startAudio.play();
    }
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <Controller
          turnOff={turnOff}
          turn={on}
          drumKey={drumKey}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
        />
        <div className="container">
          {dataDrumPad.map((element) => {
            return (
              <DrumPad
                key={element.id}
                id={element.id}
                url={element.url}
                drumKey={element.drumKey}
                onClickSound={() => {
                  start(element.drumKey, element.id);
                }}
                volume={volume}
                onButton={on}
              >
                {element.drumKey}
              </DrumPad>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
