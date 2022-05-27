import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import App from './App';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
