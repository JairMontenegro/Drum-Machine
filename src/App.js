import { useEffect, useState } from "react";
import "./App.scss";
import DrumPad from "./components/DrumPad";
import dataDrumPad from "./data/DrumPad";

function App() {
  const [drumKey, setDrumKey] = useState("");

  const findId = () => {
    dataDrumPad.filter((elem) => {
      return console.log(elem.id);
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      start(event.key.toUpperCase(), findId());
    });
  }, []);

  const start = (identifier, drumId) => {
    const audio = document.getElementById(identifier);
    audio.play();
    setDrumKey(drumId);
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{drumKey}</div>
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
              >
                {element.drumKey}
              </DrumPad>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
