import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.module.css';

const navbar = () => {
  return (
    <header>
      <img className='logo' src='images/logo.png' height='40px' alt='logo' />
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
    </header>
  );
};

export default navbar;
