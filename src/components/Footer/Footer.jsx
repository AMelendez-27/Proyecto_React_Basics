import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  // Function to handle mouse enter and leave events for the portfolio icon
  const porfolioMouseEnter = (e) => {
    e.target.src = '/src/assets/porfolio_icon2.png'; // Change image on hover
  };
  const porfolioMouseLeave = (e) => {
    e.target.src = '/src/assets/porfolio_icon.png'; // Default image when mouse leaves
  };

  // Function to handle mouse enter and leave events for the linkedin icon
  const linkedinMouseEnter = (e) => {
    e.target.src = '/src/assets/linkedin_link2.png'; // Change image on hover
  };
  const linkedinMouseLeave = (e) => {
    e.target.src = '/src/assets/linkedin_link.png'; // Default image when mouse leaves
  };

  // Function to handle mouse enter and leave events for the github icon
  const githubMouseEnter = (e) => {
    e.target.src = '/src/assets/github_link2.png'; // Change image on hover
  };
  const githubMouseLeave = (e) => {
    e.target.src = '/src/assets/github_link.png'; // Default image when mouse leaves
  };

  return (
    <footer>
      <p className="footer-text">Developed by Àlex Meléndez Centeno</p>
      <div className="footer-links-container">
        <Link to={'https://alex-melendez-centeno-porfolio.netlify.app/'}><img className="footer-icon" src="/src/assets/porfolio_icon.png" alt="Porfolio icon link" onMouseEnter={porfolioMouseEnter} onMouseLeave={porfolioMouseLeave} /></Link>
        <Link to={'https://www.linkedin.com/in/%C3%A0lex-mel%C3%A9ndez-centeno-a76353337/'}><img className="footer-icon" src="/src/assets/linkedin_link.png" alt="Porfolio icon link" onMouseEnter={linkedinMouseEnter} onMouseLeave={linkedinMouseLeave} /></Link>
        <Link to={'https://github.com/AMelendez-27'}><img className="footer-icon" src="/src/assets/github_link.png" alt="Porfolio icon link" onMouseEnter={githubMouseEnter} onMouseLeave={githubMouseLeave} /></Link>
      </div>
    </footer>
  );
};

export default Footer;