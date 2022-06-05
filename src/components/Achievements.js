import { motion } from 'framer-motion';

import Header from './Header';
import BottomBar from './BottomBar';
import Achievement from './Achievement';

import './Achievements.css';

import achievementData from '../achievementsData';

const Achievements = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <div className="home__container">
        <div className="home__content">
          <div className="home__content__text">
            <div>
              <h1>Achievements💡</h1>
            </div>
            <div>
              <p>Some of my achievements over the past few years</p>
            </div>
            <div className="achievements-container">
              {achievementData.map((achievement) => {
                return <Achievement data={achievement} />;
              })}
            </div>
          </div>
        </div>

        {/* Background blur boxes */}
        <div className="blur-ellipse be-1"></div>
        <div className="blur-ellipse be-2"></div>
      </div>
      <BottomBar />
    </motion.div>
  );
};

export default Achievements;
