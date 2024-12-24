import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Recommendations from "./Recommendations";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;