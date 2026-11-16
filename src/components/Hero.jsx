import React from 'react';
import './Hero.css';
import profileImg from '../images/profile-main.png'; // Update with your image name

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="hero-title">Bismah Maher</h1>
        <p className="hero-subtitle">FULL-STACK WEB DEVELOPER WITH A FLAIR FOR CLEAN CODE</p>
        <button className="contact-btn" onClick={onOpenContact}>
          CONTACT
        </button>
      </div>
      <div className="hero-right">
        <img src={profileImg} alt="Profile" className="hero-img" />
      </div>
    </section>
  );
}