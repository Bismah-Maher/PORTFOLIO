import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container" id="top">
      {/* Sticky Navbar stays at the top across all sections */}
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
      </main>

      <Footer />
    </div>
  );
}