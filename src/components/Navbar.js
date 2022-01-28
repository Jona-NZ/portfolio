import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
//import LightDarkToggle from './LightDarkToggle';

const navbar = () => {
  return (
    <header>
      <img
        className={styles.logo}
        src='images/logo.png'
        height='40px'
        alt='logo'
      />
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
      <a className={styles.dmToggle} href='https://google.com'>
        Dark Mode
      </a>

      {/*<LightDarkToggle />*/}
    </header>
  );
};

export default navbar;
