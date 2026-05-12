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
    <div className="min-h-screen bg-black text-white ">
      {/* Sticky navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <Hero />

        {/* Subtle alternating section backgrounds */}
        <div className="bg-black">
          <About />
        </div>
        <div className="bg-gray-900">
          <Education />
        </div>
        <div className="bg-black">
          <Experience />
        </div>
        <div className="bg-gray-900">
          <Skills />
        </div>
        <div className="bg-black">
          <Projects />
        </div>
        <div className="bg-gray-900">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
