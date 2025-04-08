import './CompactHeader.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CompactHeader = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
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
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    isHeaderVisible && (
      <header ref={menuRef} className={`compact-menu ${isMenuVisible ? 'resize-menu' : ''}`}>
        <img className="menu-icon" src="/src/assets/menu-icon.png" alt="Menu icon" onClick={toggleMenu} />
        <nav className={`compact-nav ${isMenuVisible ? '' : 'hidden-menu'}`}>
          <ul className='compact-menu-list'>
            <li className='compact-menu-item' onClick={() => setIsMenuVisible(false)}>
              <Link to="/">Home</Link>
            </li>
            <li className='compact-menu-item' onClick={() => setIsMenuVisible(false)}>
              <Link to="/browse-pokemon">Latest Set</Link>
            </li>
            <li className='compact-menu-item' onClick={() => setIsMenuVisible(false)}>
              <Link to="/explore-sets">Explore sets</Link>
            </li>
            <li className='compact-menu-item' onClick={() => setIsMenuVisible(false)}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  );
};

export default CompactHeader;