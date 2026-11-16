import React, { useState } from 'react';
import './ContactModal.css';

export default function ContactModal({ isOpen, onClose }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    // Replace with your free Access Key from https://web3forms.com/ (linked to maharbismah@gmail.com)
    formData.append('access_key', '19006487-1033-4223-825e-a2571530bee8');
    formData.append('subject', 'New Portfolio Contact Message');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => {
          setStatus('idle');
          onClose();
        }, 2500);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <h2 className="modal-title">Get In Touch</h2>
        <p className="modal-subtitle">
          Have a project in mind or want to collaborate? Send a message directly to{' '}
          <a href="mailto:maharbismah@gmail.com" className="direct-email-link">
            maharbismah@gmail.com
          </a>
        </p>

        {status === 'success' ? (
          <div className="modal-feedback success">
            Message sent! Bismah will get back to you shortly.
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Full Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="sarah@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell me about your project or inquiry..."
                required
              ></textarea>
            </div>

            {status === 'error' && (
              <p className="modal-feedback error">
                Something went wrong. Please try again or email directly.
              </p>
            )}

            <button
              type="submit"
              className="modal-submit-btn"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}