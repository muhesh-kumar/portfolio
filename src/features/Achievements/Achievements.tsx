import { motion } from 'framer-motion';

import Header from '../../components/Header/Header';
import BottomBar from '../../components/BottomBar/BottomBar';
import Achievement from '../../components/Achievement/Achievement';
import BackgroundBlurEllipse from '../../components/BackgroundBlurEllipse/BackgroundBlurEllipse';

import './Achievements.scss';

import achievementData from '../../data/achievementsData';

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
      <div className="home">
        <div className="home__content">
          <div className="home__text">
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

        <BackgroundBlurEllipse />
      </div>
      <BottomBar />
    </motion.div>
  );
};

export default Achievements;
