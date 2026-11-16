
import React, { useState } from 'react';
import './Gallery.css';

import proj1 from '../images/libb.png';
import proj2 from '../images/civicfix.png';
import proj3 from '../images/campus.png';
import proj4 from '../images/gameloft.png';
import proj5 from '../images/matcha.jpg';
import proj6 from '../images/elegance.png';

export default function Gallery() {

  // Controls how many projects are displayed
  const [showAll, setShowAll] = useState(false);

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
      title: "CivicFix-Public Platform",
      category: "Full-Stack Prototype",
      desc: "A community-driven platform that enables citizens to report local issues, track complaints, and work together towards building a better city.",
      tags: ["React", "Vite", "JavaScript", "CSS", "REST API", "MongoDB", "Civic Tech", "UX Design"],
      img: proj2,
      liveUrl: "https://civic-fix-g21j.vercel.app/",
      githubUrl: "https://github.com/Bismah-Maher/CivicFix"
    },
    {
      id: "03",
      title: "SMIT Educational Portal",
      category: "Web Application",
      desc: "Built a React-based student portal featuring course registration, an admin dashboard, and instant roll number card generation. Ranked 1st among 80 students in my first hackathon and received a certificate of recognition.",
      tags: ["React", "State Management", "REST API", "Tailwind"],
      img: proj3,
      liveUrl: "https://smitportal.vercel.app/",
      githubUrl: "https://github.com/Bismah-Maher"
    },
    {
      id: "04",
      title: "Teen Titans Go Game",
      category: "Browser Canvas Game",
      desc: "Currently in development: A retro 2D arcade game featuring custom physics, AI chase mechanics, collision detection, and responsive canvas animations.",
      tags: ["HTML5 Canvas", "JavaScript", "Game Physics", "CSS3"],
      img: proj4,
      liveUrl: "https://bismah-maher.github.io/TeenTitansGo/",
      githubUrl: "https://github.com/Bismah-Maher/TeenTitansGo"
    },
    {
      id: "05",
      title: "GreenSip Matcha Prototype",
      category: "Frontend Showcase",
      desc: "High-end product display experience featuring interactive 3D conveyor carousel navigation and sleek micro-animations.",
      tags: ["React", "Vite", "3D Animations", "UX Design"],
      img: proj5,
      liveUrl: "https://bismah-maher.github.io/GreenSip/",
      githubUrl: "https://github.com/Bismah-Maher/GreenSip"
    },
    {
      id: "06",
      title: "Elegance Ecommerce Prototype",
      category: "Frontend Showcase",
      desc: "An interactive, high-fashion e-commerce landing page designed for a luxury perfume house. Engineered smooth scroll-triggered product reveals, kinetic typography, and bottle-stage transitions using GSAP and ScrollTrigger.",
      tags: ["React", "Vite", "3D Animations", "UX Design", "Gsap Animations"],
      img: proj6,
      liveUrl: "https://bismah-maher.github.io/Presentation-gsap/",
      githubUrl: "https://github.com/Bismah-Maher/Presentation-gsap"
    }
  ];

  // Initially show 2 projects, or all projects when expanded
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="gallery" className="gallery-section">

      {/* Section Header */}
      <div className="gallery-header">

        <div className="header-badge">Selected Works</div>

        <h2 className="section-title">
          Projects & Gallery
        </h2>

        <p className="gallery-subtitle">
          A showcase of full-stack web applications, interactive web tools, and creative frontend engineering.
        </p>

      </div>

      {/* Projects Showcase */}
      <div className="projects-showcase-list">

        {visibleProjects.map((p, index) => (

          <article
            key={p.id}
            className={`project-row ${index % 2 !== 0 ? 'project-row-reverse' : ''}`}
          >

            {/* Project Image */}
            <div className="project-visual-frame">

              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="project-img-container">
                <img
                  src={p.img}
                  alt={p.title}
                  className="project-img"
                />
              </div>

            </div>

            {/* Project Details */}
            <div className="project-details">

              <div className="project-meta">
                <span className="project-number">
                  {p.id}
                </span>

                <span className="project-category">
                  {p.category}
                </span>
              </div>

              <h3 className="project-title">
                {p.title}
              </h3>

              <p className="project-desc">
                {p.desc}
              </p>

              {/* Technology Tags */}
              <div className="project-tags">

                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-pill">
                    {tag}
                  </span>
                ))}

              </div>

              {/* Project Links */}
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

      {/* View More / View Less Button */}
      <div className="gallery-toggle-container">

        <button
          className="gallery-toggle-btn"
          onClick={() => setShowAll(!showAll)}
          aria-expanded={showAll}
        >

          {showAll ? 'View Less' : 'View More Projects'}

          <span className={`toggle-arrow ${showAll ? 'arrow-up' : ''}`}>
            {showAll ? '↑' : '↓'}
          </span>

        </button>

      </div>

    </section>
  );
}
