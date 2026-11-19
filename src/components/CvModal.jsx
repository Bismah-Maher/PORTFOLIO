import React from 'react';
import './CvModal.css';
import cvPreviewImg from '../images/cv.png'; // or '../images/cv.jpg'

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="cv-modal-backdrop" onClick={onClose}>
      <div className="cv-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <h2 className="cv-modal-title">My Resume / CV</h2>
          <div className="cv-modal-actions">
            <a
              href="/Bismah_Maher_CV.pdf"
              download="Bismah_Maher_CV.pdf"
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
          <img
            src={cvPreviewImg}
            alt="Bismah Maher CV"
            className="cv-preview-img"
          />
        </div>
      </div>
    </div>
  );
}