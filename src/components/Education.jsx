import React from 'react';
import './Education.css';

export default function Education() {
  const educationList = [
    {
      degree: "Full-Stack Web Development",
      institution: "From Saylani Mass IT Training",
      period: "Completed",
      desc: "Specialized in React, Vite, TypeScript, Tailwind, Node.js, Express, and MongoDB architectures in 2026."
    },
    {
      degree: "Higher Secondary Education",
      institution: "From Army Public Degree College, Malir Cantt",
      period: "Completed",
      desc: "Completed College with Pre-Medical background in 2025."
    }
  ];

  return (
    <section className="education-section">
      <div className="education-badge-container">
        <div className="education-badge">Education</div>
      </div>

      <div className="education-grid">
        {educationList.map((edu, index) => (
          <div key={index} className="education-card">
            <span className="edu-period">{edu.period}</span>
            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-institution">{edu.institution}</p>
            <p className="edu-desc">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}