import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../App' was resolved to '/home/muhesh/dev/... Remove this comment to see the full error message
import App from '../App';
// @ts-expect-error ts-migrate(6142) FIXME: Module './About/About' was resolved to '/home/muhe... Remove this comment to see the full error message
import About from './About/About';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Projects/Projects' was resolved to '/hom... Remove this comment to see the full error message
import Projects from './Projects/Projects';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Skills/Skills' was resolved to '/home/mu... Remove this comment to see the full error message
import Skills from './Skills/Skills';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Journey/Journey' was resolved to '/home/... Remove this comment to see the full error message
import Journey from './Journey/Journey';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Achievements/Achievements' was resolved ... Remove this comment to see the full error message
import Achievements from './Achievements/Achievements';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <AnimatePresence exitBeforeEnter>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Routes location={location} key={location.pathname}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Route path="/" element={<App />} />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Route path="about" element={<About />} />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Route path="projects" element={<Projects />} />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Route path="skills" element={<Skills />} />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Route path="journey" element={<Journey />} />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Route path="achievements" element={<Achievements />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
