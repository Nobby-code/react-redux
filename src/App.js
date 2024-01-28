import Ninja from "./components/Ninja";

function App() {
  return (
    <div className="App">
      <h1>My New React App!</h1>
      <p>Welcome :)</p>
      <Ninja name="Nobby" age="25" belt="Black" />
      <Ninja name="Guda" age="30" belt="Black" />
    </div>
  );
}

export default App;
