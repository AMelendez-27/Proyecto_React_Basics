import './CompactHeader.css';
import React, { useReducer, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Estado inicial para el reducer
const initialState = {
  isMenuVisible: false,
  isHeaderVisible: true,
};

// Reducer para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuVisible: !state.isMenuVisible };
    case 'CLOSE_MENU':
      return { ...state, isMenuVisible: false };
    case 'SHOW_HEADER':
      return { ...state, isHeaderVisible: true };
    case 'HIDE_HEADER':
      return { ...state, isHeaderVisible: false };
    default:
      return state;
  }
};

const CompactHeader = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' });
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      dispatch({ type: 'CLOSE_MENU' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        dispatch({ type: 'HIDE_HEADER' });
        dispatch({ type: 'CLOSE_MENU' });
      } else {
        dispatch({ type: 'SHOW_HEADER' });
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
    state.isHeaderVisible && (
      <header ref={menuRef} className={`compact-menu ${state.isMenuVisible ? 'resize-menu' : ''}`}>
        <img
          className="menu-icon"
          src="/src/assets/menu-icon.png"
          alt="Menu icon"
          onClick={toggleMenu}
        />
        <nav className={`compact-nav ${state.isMenuVisible ? '' : 'hidden-menu'}`}>
          <ul className="compact-menu-list">
            <li className="compact-menu-item" onClick={() => dispatch({ type: 'CLOSE_MENU' })}>
              <Link to="/">Home</Link>
            </li>
            <li className="compact-menu-item" onClick={() => dispatch({ type: 'CLOSE_MENU' })}>
              <Link to="/browse-pokemon">Latest Set</Link>
            </li>
            <li className="compact-menu-item" onClick={() => dispatch({ type: 'CLOSE_MENU' })}>
              <Link to="/explore-sets">Explore sets</Link>
            </li>
            <li className="compact-menu-item" onClick={() => dispatch({ type: 'CLOSE_MENU' })}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  );
};

export default CompactHeader;