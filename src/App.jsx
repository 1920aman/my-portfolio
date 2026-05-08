// App.jsx — Root component. Assembles all sections in order.
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-bg-primary font-outfit antialiased">
      {/* Sticky navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <Hero />

        {/* Subtle alternating section backgrounds */}
        <div className="bg-bg-primary">
          <About />
        </div>
        <div className="bg-bg-secondary">
          <Education />
        </div>
        <div className="bg-bg-primary">
          <Experience />
        </div>
        <div className="bg-bg-secondary">
          <Skills />
        </div>
        <div className="bg-bg-primary">
          <Projects />
        </div>
        <div className="bg-bg-secondary">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
