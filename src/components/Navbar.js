import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import LightDarkToggle from './LightDarkToggle';
import { RiMenuFill } from 'react-icons/ri';

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayWidth, setOverlayWidth] = useState('0');

  const toggleOverlay = () => {
    if (isOverlayOpen) {
      setOverlayWidth('0');
      setIsOverlayOpen(!isOverlayOpen);
    } else {
      setOverlayWidth('100%');
      setIsOverlayOpen(!isOverlayOpen);
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
            <LightDarkToggle className={styles.toggle} />
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
            <LightDarkToggle className={styles.toggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
