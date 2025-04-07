import React, { useState, useEffect } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 820) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`main-menu ${isActive ? 'not-active' : ''}`}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/browse-pokemon">Latest Set</Link>
          </li>
          <li>
            <Link to="/explore-sets">Explore sets</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;