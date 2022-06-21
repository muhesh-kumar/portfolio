import { motion } from 'framer-motion';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Header/Header' was resolved to '/home/m... Remove this comment to see the full error message
import Header from '../Header/Header';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../BottomBar/BottomBar' was resolved to '/... Remove this comment to see the full error message
import BottomBar from '../BottomBar/BottomBar';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Achievement/Achievement' was resolved t... Remove this comment to see the full error message
import Achievement from '../Achievement/Achievement';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../BackgroundBlurEllipse/BackgroundBlurEll... Remove this comment to see the full error message
import BackgroundBlurEllipse from '../BackgroundBlurEllipse/BackgroundBlurEllipse';

import './Achievements.scss';

import achievementData from '../../data/achievementsData';

const Achievements = () => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Header />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="home">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="home__content">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="home__text">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <h1>Achievements💡</h1>
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <p>Some of my achievements over the past few years</p>
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="achievements-container">
              {achievementData.map((achievement) => {
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                return <Achievement data={achievement} />;
              })}
            </div>
          </div>
        </div>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <BackgroundBlurEllipse />
      </div>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <BottomBar />
    </motion.div>
  );
};

export default Achievements;
