import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ onOpenContact, onOpenCv }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    onOpenContact();
  };

  const handleCvClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    onOpenCv();
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#top" className="navbar-logo">
          BISMAH MAHER<span className="logo-dot">.</span>
        </a>

        {/* Navigation Links */}
        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#education" onClick={handleLinkClick}>Education</a>
          <a href="#gallery" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" className="nav-contact-btn" onClick={handleContactClick}>
            Contact
          </a>
          <a href="#cv" className="nav-contact-btn nav-cv-btn" onClick={handleCvClick}>
           View CV
          </a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}