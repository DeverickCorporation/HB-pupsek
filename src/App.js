import { Buttons, Greeting, Last, Part1, Part2 } from "./parts";
function App() {
  return (
    <div className="App d-flex flex-column">
      <Greeting />
      <Part1 />
      <Part2 />
      <Buttons />
      <Last />
    </div>
  );
}

export default App;
