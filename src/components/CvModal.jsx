import React from 'react';
import './CvModal.css';
import cvImg from '../images/cv.png'; // Update with your actual CV image filename

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="cv-modal-backdrop" onClick={onClose}>
      <div className="cv-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <h2 className="cv-modal-title">My Resume / CV</h2>
          <div className="cv-modal-actions">
            <a 
              href={cvImg} 
              download="Bismah_Maher_CV.png" 
              className="cv-download-btn"
            >
              DOWNLOAD
            </a>
            <button 
              className="cv-close-btn" 
              onClick={onClose} 
              aria-label="Close CV modal"
            >
              &times;
            </button>
          </div>
        </div>

        <div className="cv-image-wrapper">
          <img src={cvImg} alt="Bismah Maher CV" className="cv-preview-img" />
        </div>
      </div>
    </div>
  );
}