import React, { useState } from 'react';
import './Footer.css';
import contactImg from '../images/111.png';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "maharbismah@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-image-banner-wrapper">
        <div className="footer-banner-overlay"></div>
        <img src={contactImg} alt="Contact Banner" className="footer-banner-img" />
      </div>

      <div className="footer-content">
        <div className="footer-top-bar">
          <span className="footer-availability-badge">
            <span className="pulse-dot"></span> Available for new projects
          </span>
          <span className="footer-tagline">Let's build something iconic together</span>
        </div>

        <div className="footer-main-cta">
          <h2 className="footer-title">Have an idea?</h2>
          <a href={`mailto:${email}`} className="footer-big-email-link">
            Let's Talk <span className="arrow-icon">↗</span>
          </a>
        </div>

        <div className="footer-info-grid">
          <div className="footer-col">
            <h4 className="footer-label">Direct Contact</h4>
            <div className="footer-contact-item">
              <p className="footer-sublabel">Email</p>
              <div className="email-copy-row">
                <a href={`mailto:${email}`} className="footer-val-link">{email}</a>
                <button 
                  className={`copy-btn ${copied ? 'copied' : ''}`} 
                  onClick={handleCopyEmail}
                  title="Copy Email"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>
            <div className="footer-contact-item">
              <p className="footer-sublabel">Phone</p>
              <a href="tel:+923012434137" className="footer-val-link">+92 301 2434137</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-label">Location</h4>
            <p className="footer-val-text">Karachi, Pakistan</p>
            <p className="footer-sublabel time-indicator">PKT (UTC+5)</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-label">Connect</h4>
            <ul className="footer-social-list">
              <li>
                <a href="https://github.com/Bismah-Maher" target="_blank" rel="noopener noreferrer" className="social-link">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bismah-m-199259384" target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="https://www.upwork.com/freelancers/~01a5356c288b40e6d9" target="_blank" rel="noopener noreferrer" className="social-link">
                  Upwork ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bismah Maher. Built with precision & passion.
          </p>
          <a href="#top" className="back-to-top-btn">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}