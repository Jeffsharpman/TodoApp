import Home from "./components/pages/Home";
import ScrollProgress from "./components/UI/ScrollProgress";
import CursorGlow from "./components/UI/CursorGlow";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <CursorGlow />
      <Home />
    </div>
  );
}

export default App;
