import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <div style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
