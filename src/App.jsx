import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactModal from './components/ContactModal';
import CvModal from './components/CvModal';
import Footer from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="app-container" id="top">
      <Navbar 
        onOpenContact={() => setIsContactOpen(true)} 
        onOpenCv={() => setIsCvOpen(true)} 
      />

      <main>
        <section id="home">
          <Hero onOpenContact={() => setIsContactOpen(true)} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="education">
          <Education />
        </section>

         <section id="services">
  <Services onOpenContact={() => setIsContactOpen(true)} />
</section>
        
        <section id="gallery">
          <Gallery />
        </section>
      </main>

      <Footer />

      {/* Contact Popup Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* CV Popup Modal */}
      <CvModal 
        isOpen={isCvOpen} 
        onClose={() => setIsCvOpen(false)} 
      />
    </div>
  );
}