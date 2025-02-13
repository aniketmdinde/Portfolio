import React from "react";
import Blurbackground from "./components/Blurbackground";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Blurbackground />
      <main className="antialiased overflow-x-hidden max-w-6xl mx-auto relative z-10 ">
        <Navbar />
        <Home />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
};

export default App;
