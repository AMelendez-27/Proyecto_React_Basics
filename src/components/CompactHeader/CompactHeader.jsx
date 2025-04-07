import './CompactHeader.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CompactHeader = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setIsHeaderVisible(false);
        setIsMenuVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isHeaderVisible && (
      <header className={`compact-menu ${isMenuVisible ? 'resize-menu' : ''}`}>
        <img className="menu-icon" src="/assets/menu-icon.png" alt="Menu icon" onClick={toggleMenu} />
        <nav className={`compact-nav ${isMenuVisible ? '' : 'hidden-menu'}`}>
          <ul className='compact-menu-list'>
            <li className='compact-menu-item'>
              <Link to="/">Home</Link>
            </li>
            <li className='compact-menu-item'>
              <Link to="/browse-pokemon">Latest Set</Link>
            </li>
            <li className='compact-menu-item'>
              <Link to="/explore-sets">Explore sets</Link>
            </li>
            <li className='compact-menu-item'>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  );
};

export default CompactHeader;