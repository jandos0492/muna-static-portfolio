import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ContactLinks.css';

const ContactLinks = () => {
  const [activeLink, setActiveLink] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconSize = windowWidth < 600 ? 'lg' : '2x';

  return (
    <div className="contact-links">
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink('Resume')}
        onMouseLeave={() => setActiveLink('')}
      >
        <a 
          href="/files/Muna_Toktobolotova_Resume.pdf" 
          download 
          className="link-content">
          <FontAwesomeIcon icon={faFileAlt} size={iconSize} />
          {activeLink === 'Resume' && <span className="link-text">Resume</span>}
        </a>
      </div>
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink('LinkedIn')}
        onMouseLeave={() => setActiveLink('')}
      >
        <a 
          href="https://www.linkedin.com/in/munara-toktobolotova/" 
          target="_blank" rel="noopener noreferrer"
          className="link-content">
          <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
          {activeLink === 'LinkedIn' && <span className="link-text">LinkedIn</span>}
        </a>
      </div>
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink('Email')}
        onMouseLeave={() => setActiveLink('')}
      >
        <a 
          href="mailto:munara.qa@gmail.com" 
          className="link-content">
          <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
          {activeLink === 'Email' && <span className="link-text">Email</span>}
        </a>
      </div>
    </div>
  );
};

export default ContactLinks;
