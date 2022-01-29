import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from '../styles/Layout.module.css';
import '../styles/theme.css';

const Layout = () => {
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      document.documentElement.setAttribute(
        'data-theme',
        localStorage.getItem('theme')
      );

      let toggle = JSON.parse(localStorage.getItem('toggle'));
      if (toggle) {
        document.getElementById('toggle').checked = toggle;
      }
    }
  }, []);

  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
