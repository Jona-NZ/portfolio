import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div style={{ backgroundColor: '#24292e', minHeight: '100vh' }}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
