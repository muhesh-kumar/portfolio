import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import App from '../App';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Journey from './Journey/Journey';
import Achievements from './Achievements/Achievements';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="journey" element={<Journey />} />
          <Route path="achievements" element={<Achievements />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;