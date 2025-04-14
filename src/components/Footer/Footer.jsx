import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p className="footer-text">Developed by Àlex Meléndez Centeno</p>
      <div className="footer-links-container">
        <Link to={'https://alex-melendez-centeno-porfolio.netlify.app/'}>
          <img className="footer-icon" src="/src/assets/porfolio_icon.png" alt="Portfolio icon link" />
        </Link>
        <Link to={'https://www.linkedin.com/in/%C3%A0lex-mel%C3%A9ndez-centeno-a76353337/'}>
          <img className="footer-icon" src="/src/assets/linkedin_link.png" alt="LinkedIn icon link" />
        </Link>
        <Link to={'https://github.com/AMelendez-27'}>
          <img className="footer-icon" src="/src/assets/github_link.png" alt="GitHub icon link" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;