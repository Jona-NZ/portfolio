import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Error from './pages/Error';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
