import { motion } from 'framer-motion';

import Header from '../../components/Header/Header';
import BottomBar from '../../components/BottomBar/BottomBar';
import Skill from '../../components/Skill/Skill';
import BackgroundBlurEllipse from '../../components/BackgroundBlurEllipse/BackgroundBlurEllipse';

import './Skills.scss';

import skillsData from '../../data/skillsData';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// How to display images inside public directory?
// https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder
const pathOfImages = 'assets/images/';

const Skills = () => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      <div className="home">
        <div className="home__content">
          <div className="home__text">
            <div>
              <h1>Skills</h1>
            </div>
            <div>
              <p>Here are some of my skills</p>
            </div>
            <div className="skills">
              {skillsData.map((skill) => {
                return (
                  <div className="skills-wrapper">
                    <h2>{skill.skillType}</h2>
                    <div className="skills__container">
                      {skill.skills.map((skillDetail) => {
                        return (
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
        <BackgroundBlurEllipse />
      </div>
      <BottomBar />
    </motion.div>
  );
};

export default Skills;
