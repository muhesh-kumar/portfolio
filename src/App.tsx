import { motion } from 'framer-motion';

// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Header/Header' was resolved t... Remove this comment to see the full error message
import Header from './components/Header/Header';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Home/Home' was resolved to '/... Remove this comment to see the full error message
import Home from './components/Home/Home';
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/BottomBar/BottomBar' was reso... Remove this comment to see the full error message
import BottomBar from './components/BottomBar/BottomBar';

import './App.scss';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const App = () => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <motion.div
      className="App"
      // initial={{
      //   width: 0,
      // }}
      // animate={{ width: '100%' }}
      // exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Header />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Home />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <BottomBar />
    </motion.div>
  );
};

export default App;
