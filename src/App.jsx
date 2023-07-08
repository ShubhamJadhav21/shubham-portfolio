import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";
import GoToTop from "./components/GoToTop/GoToTop";


const App = () => {
  return (
    <>
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <GoToTop/>
      
    </div>
    </>
  );
};

export default App;
