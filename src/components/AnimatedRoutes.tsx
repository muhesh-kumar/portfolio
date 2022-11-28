import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import App from '../App';
import About from '../features/About/About';
import Projects from '../features/Projects/Projects';
import Skills from '../features/Skills/Skills';

// import Journey from '../features/Journey/Journey';
// import Achievements from '../features/Achievements/Achievements';

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
          {/* TODO: do this properly later */}
          {/* <Route path="journey" element={<Journey />} />
          <Route path="achievements" element={<Achievements />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
