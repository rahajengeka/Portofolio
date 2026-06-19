import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      color: '#333', 
      backgroundColor: '#f9f9f9', 
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      {/* Semua komponen dipanggil berurutan dari atas ke bawah */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;