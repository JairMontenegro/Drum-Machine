import { useState } from "react";
import "./App.scss";
import DrumPad from "./components/DrumPad";
import dataDrumPad from "./data/DrumPad";

function App() {
  const [drumKey, setDrumKey] = useState(null);
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{drumKey}</div>
        {dataDrumPad.map((element) => {
          return (
            <button key={element.id} onClick={() => setDrumKey(element.id)}>
              <DrumPad
                id={element.id}
                url={element.url}
                drumKey={element.drumKey}
              >
                {element.drumKey}
              </DrumPad>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
