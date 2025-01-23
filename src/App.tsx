import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;