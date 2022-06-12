import { motion } from 'framer-motion';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import BottomBar from './components/BottomBar/BottomBar';

import './App.scss';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const App = () => {
  return (
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
      <Header />
      <Home />
      <BottomBar />
    </motion.div>
  );
};

export default App;
