import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactLinks from "./components/ContactLinks";

function App() {
  return (
    <div>
      <ContactLinks />
      <Navbar />
      <About />
      <Skills />
    </div>
  )
}

export default App;
