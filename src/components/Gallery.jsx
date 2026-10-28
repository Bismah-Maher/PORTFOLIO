import React from 'react';
import './Gallery.css';
import proj1 from '../images/libb.png';
import proj2 from '../images/campus.png';
import proj3 from '../images/gameloft.png';
import proj4 from '../images/matcha.jpg';

export default function Gallery() {
  const projects = [
    { 
      id: "01",
      title: "Library Management", 
      category: "Full-Stack Web App", 
      desc: "An intuitive web application featuring book search, category filtering, real-time availability tracking, and user borrowing workflows.", 
      tags: ["React", "Vite", "JavaScript", "CSS3"],
      img: proj1,
      liveUrl: "https://roshni-library-management.vercel.app/",
      githubUrl: "https://github.com/Bismah-Maher"
    },
    { 
      id: "02",
      title: "SMIT Educational Portal", 
      category: "Web Application", 
      desc: "Built a React-based student portal featuring course registration, an admin dashboard, and instant roll number card generation. **Ranked 1st among 80 students** in my first hackathon and received a certificate of recognition.", 
      tags: ["React", "State Management", "REST API", "Tailwind"],
      img: proj2,
      liveUrl: "https://smitportal.vercel.app/",
      githubUrl: "https://github.com/Bismah-Maher"
    },
    { 
      id: "03",
      title: "Teen Titans Go Game", 
      category: "Browser Canvas Game", 
      desc: "Currently in development: A retro 2D arcade game featuring custom physics, AI chase mechanics, collision detection, and responsive canvas animations.", 
      tags: ["HTML5 Canvas", "JavaScript", "Game Physics", "CSS3"],
      img: proj3,
      liveUrl: "https://bismah-maher.github.io/TeenTitansGo/",
      githubUrl: "https://github.com/Bismah-Maher/TeenTitansGo"
    },
    { 
      id: "04",
      title: "GreenSip Matcha Showcase", 
      category: "Frontend Showcase", 
      desc: "High-end product display experience featuring interactive 3D conveyor carousel navigation and sleek micro-animations.", 
      tags: ["React", "Vite", "3D Animations", "UX Design"],
      img: proj4,
      liveUrl: "https://bismah-maher.github.io/GreenSip/",
      githubUrl: "https://github.com/Bismah-Maher/GreenSip"
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      {/* Section Header */}
      <div className="gallery-header">
        <div className="header-badge">Selected Works</div>
        <h2 className="section-title">Projects & Gallery</h2>
        <p className="gallery-subtitle">
          A showcase of full-stack web applications, interactive web tools, and creative frontend engineering.
        </p>
      </div>

      {/* Editorial Row Showcase Layout */}
      <div className="projects-showcase-list">
        {projects.map((p, index) => (
          <article 
            key={p.id} 
            className={`project-row ${index % 2 !== 0 ? 'project-row-reverse' : ''}`}
          >
            {/* Left/Right Visual Frame */}
            <div className="project-visual-frame">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="project-img-container">
                <img src={p.img} alt={p.title} className="project-img" />
              </div>
            </div>

            {/* Project Content Box */}
            <div className="project-details">
              <div className="project-meta">
                <span className="project-number">{p.id}</span>
                <span className="project-category">{p.category}</span>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              {/* Tech Stack Pills */}
              <div className="project-tags">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-pill">{tag}</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                {p.liveUrl && (
                  <a 
                    href={p.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary-action"
                  >
                    View Live <span className="arrow-icon">↗</span>
                  </a>
                )}
                {p.githubUrl && (
                  <a 
                    href={p.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-secondary-action"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}