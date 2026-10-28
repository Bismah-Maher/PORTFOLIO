import React from 'react';
import './About.css';
import aboutImg from '../images/project22.png'; // Can use your photo here too

export default function About() {
  return (
    <section className="about-section">
      <h2 className="section-title">About me</h2>
      <div className="about-grid">
        <div className="about-img-box">
          <img src={aboutImg} alt="About Me" />
        </div>
        <div className="about-text">
          <p>
            I am a passionate web developer specializing in building modern front-end and full-stack applications with JavaScript, React, and Node.js. With a strong eye for luxury, high-end visual aesthetics and smooth user experiences, I turn complex requirements into clean, performant, and interactive digital solutions.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            When I'm not writing code or building scalable web architectures, you'll find me crafting 2D browser games, designing pixel art assets, or exploring creative digital layouts.
          </p>
        </div>
      </div>
    </section>
  );
}