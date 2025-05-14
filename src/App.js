import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Resume from "./components/Resume/Resume";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Resume />
        </main>
        <footer className="footer bg-dark text-white text-center py-3">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} Emilio Cyriaque. Tous droits
              réservés.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
