import "./App.scss";
import DrumPad from "./components/DrumPad";
import dataDrumPad from "./util/DrumPad-data";

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"></div>
        {dataDrumPad.map((element) => {
          return (
            <div key={element.id}>
              <DrumPad id={element.id} url={element.url}>
                {element.drumKey}
              </DrumPad>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
