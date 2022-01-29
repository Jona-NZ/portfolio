import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import LightDarkToggle from './LightDarkToggle';
import { RiMenuFill } from 'react-icons/ri';

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayWidth, setOverlayWidth] = useState('0');
  const [useDarkTheme, setUseDarkTheme] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      setUseDarkTheme(false);
    } else {
      setUseDarkTheme(true);
    }
  }, []);

  const toggleOverlay = () => {
    if (isOverlayOpen) {
      setOverlayWidth('0');
      setIsOverlayOpen(!isOverlayOpen);
    } else {
      setOverlayWidth('100%');
      setIsOverlayOpen(!isOverlayOpen);
    }
  };

  const toggleTheme = () => {
    if (useDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'light');
      setUseDarkTheme(!useDarkTheme);
      localStorage.setItem('theme', 'light');

      //Toggle Local Storage
      let toggle = document.getElementById('toggle');
      localStorage.setItem('toggle', toggle.checked);
    }

    if (!useDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      setUseDarkTheme(!useDarkTheme);
      localStorage.setItem('theme', 'dark');

      //Toggle Local Storage
      localStorage.setItem('toggle', false);
    }
  };

  return (
    <div>
      <div className={styles.headerContainer}>
        <header>
          <Link className={styles.logo} to='/'>
            <img src='images/logo.png' height='40px' alt='logo' />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.toggleMargin}>
            <LightDarkToggle click={toggleTheme} />
          </div>
          <button className={styles.menu} onClick={toggleOverlay}>
            <RiMenuFill className={styles.menuToggle} />
          </button>
        </header>
      </div>

      {/*MOBILE OVERLAY */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: overlayWidth,
          height: '100%',
          backgroundColor: '#24252a',
          zIndex: 1,
          overflowX: 'hidden',
          transition: 'all 0.5s ease 0s',
        }}
      >
        <div className={styles.overlayContent}>
          <button className={styles.closebtn} onClick={toggleOverlay}>
            &times;
          </button>
          <Link onClick={toggleOverlay} to='/'>
            Home
          </Link>
          <Link onClick={toggleOverlay} to='/about'>
            About
          </Link>
          <Link onClick={toggleOverlay} to='/contact'>
            Contact
          </Link>
          <div className={styles.toggleOverlayMargin}>
            <LightDarkToggle click={toggleTheme} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
