import { useState } from "react";
import Home from "./components/pages/Home";
import "./App.css";
import TodoApp from "./components/novatask/TodoApp";

function App() {
  return (
    <div className="App">
      {/* <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style> */}
      <Home />
      {/* <TodoApp /> */}
    </div>
  );
}

export default App;
