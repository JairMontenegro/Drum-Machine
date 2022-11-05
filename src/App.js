import "./App.scss";
import DrumPad from "./components/DrumPad";

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"></div>
        <DrumPad id="Q">Q</DrumPad>
        <DrumPad id="W">W</DrumPad>
        <DrumPad id="E">E</DrumPad>
        <DrumPad id="A">A</DrumPad>
        <DrumPad id="S">S</DrumPad>
        <DrumPad id="D">D</DrumPad>
        <DrumPad id="Z">Z</DrumPad>
        <DrumPad id="X">X</DrumPad>
        <DrumPad id="C">C</DrumPad>
      </div>
    </div>
  );
}

export default App;
