
import React from 'react';

import {
  ArrowUpRight,
  Code2,
  Database,
  MonitorSmartphone,
  PanelsTopLeft,
  Sparkles,
  MoveUpRight
} from 'lucide-react';

import './Services.css';

const services = [
  {
    number: '01',
    title: 'Frontend',
    highlight: 'Development',
    description:
      'Building modern, interactive and responsive interfaces with clean code, thoughtful layouts and engaging user experiences.',
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    icon: Code2,
    label: 'THE INTERFACE'
  },
  {
    number: '02',
    title: 'Full-Stack',
    highlight: 'Development',
    description:
      'Developing complete web applications with functional features, backend integration, APIs and database connectivity.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: Database,
    label: 'THE ENGINE'
  },
  {
    number: '03',
    title: 'Responsive',
    highlight: 'Web Design',
    description:
      'Creating adaptable websites that look polished and work smoothly across desktops, tablets and mobile devices.',
    technologies: ['Responsive CSS', 'Flexbox', 'Grid', 'Media Queries'],
    icon: MonitorSmartphone,
    label: 'EVERY SCREEN'
  },
  {
    number: '04',
    title: 'Creative UI',
    highlight: '& Experiences',
    description:
      'Turning concepts into distinctive digital experiences through creative layouts, visual storytelling and interactive details.',
    technologies: ['UI Design', 'CSS Animation', 'GSAP', 'UX'],
    icon: PanelsTopLeft,
    label: 'THE EXPERIENCE'
  }
];

export default function Services({ onOpenContact }) {

  return (
    <section className="services-section" id="services">

      <div className="services-bg-number">04</div>

      <div className="services-container">

        {/* TOP LABEL */}
        <div className="services-topline">

          <span className="services-eyebrow">
            <Sparkles size={14} />
            WHAT I BRING TO THE TABLE
          </span>

          <span className="services-index">
            ( MY EXPERTISE — 2026 )
          </span>

        </div>

        {/* HEADER */}
        <div className="services-heading-area">

          <div className="services-heading-left">

            <span className="services-small-label">
              MY SERVICES
            </span>

            <h2>
              More than
              <br />
              just <span>code.</span>
            </h2>

          </div>

          <div className="services-heading-right">

            <div className="heading-line"></div>

            <p>
              I combine development, creativity and problem-solving
              to build digital experiences that are designed to
              look good and work beautifully.
            </p>

            <span className="services-heading-note">
              DESIGN MINDED. DEVELOPMENT DRIVEN.
            </span>

          </div>

        </div>

        {/* SERVICES */}
        <div className="services-list">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <article
                className="service-item"
                key={service.number}
              >

                {/* NUMBER */}
                <div className="service-number">
                  {service.number}
                </div>

                {/* CONTENT */}
                <div className="service-main">

                  <span className="service-label">
                    {service.label}
                  </span>

                  <h3>
                    {service.title}
                    <span>{service.highlight}</span>
                  </h3>

                  <p className="service-description">
                    {service.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="service-tech">

                    {service.technologies.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

                {/* ICON */}
                <div className="service-side">

                  <div className="service-icon">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>

                  <div className="service-arrow">
                    <ArrowUpRight size={21} />
                  </div>

                </div>

              </article>

            );

          })}

        </div>

        {/* BOTTOM CTA */}
        <div className="services-bottom">

          <div className="services-bottom-text">

            <span>HAVE A PROJECT IN MIND?</span>

            <h3>
              Let's make
              <br />
              it <span>happen.</span>
            </h3>

            <p>
              Have an idea? Let's turn it into something meaningful.
            </p>

          </div>

          {/* OPEN EXISTING CONTACT MODAL */}
          <button
            type="button"
            className="services-contact-link"
            onClick={onOpenContact}
          >

            <span>LET'S WORK TOGETHER</span>

            <span className="contact-circle">
              <MoveUpRight size={23} />
            </span>

          </button>

        </div>

        {/* FOOTER DETAILS */}
        <div className="services-footer-line">

          <span>INDEPENDENT DEVELOPER</span>

          <span>CREATIVITY × TECHNOLOGY</span>

          <span>KARACHI, PAKISTAN</span>

        </div>

      </div>

    </section>
  );
}
