import { motion } from 'framer-motion';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Header/Header' was resolved to '/home/m... Remove this comment to see the full error message
import Header from '../Header/Header';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../BottomBar/BottomBar' was resolved to '/... Remove this comment to see the full error message
import BottomBar from '../BottomBar/BottomBar';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Skill/Skill' was resolved to '/home/muh... Remove this comment to see the full error message
import Skill from '../Skill/Skill';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../BackgroundBlurEllipse/BackgroundBlurEll... Remove this comment to see the full error message
import BackgroundBlurEllipse from '../BackgroundBlurEllipse/BackgroundBlurEllipse';

import './Skills.scss';

import skillsData from '../../data/skillsData';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// How to display images inside public directory?
// https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder
const pathOfImages = 'assets/';

const Skills = () => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
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
              <h1>Skills</h1>
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <p>Here are some of my skills</p>
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="skills">
              {skillsData.map((skill) => {
                return (
                  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <div className="skills-wrapper">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <h2>{skill.skillType}</h2>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <div className="skills__container">
                      {skill.skills.map((skillDetail) => {
                        return (
                          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                          <Skill
                            skillImageUrl={
                              pathOfImages + skillDetail.skillImageName
                            }
                            skillName={skillDetail.skillName}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
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

export default Skills;
