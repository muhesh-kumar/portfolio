import { motion } from 'framer-motion';

import Header from '../Header/Header';
import BottomBar from '../BottomBar/BottomBar';
import Project from '../Project/Project';

import './Projects.scss';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const projText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptates quidem qui voluptatum repudiandae sit velit facere quod repellat, quos impedit, corporis sint blanditiis aut ex assumenda voluptatibus architecto iure?';

const Projects = () => {
  return (
    <motion.div
      className="projects"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      <div className="home__container">
        <div className="home__content">
          <div className="home__content__text">
            <div>
              <h1>Projects💡</h1>
            </div>
            <div>
              <p>Some things I've been working on in the past few months:</p>
            </div>
            <div className="projects-container">
              <Project
                projectName="GitHub Repo Lister"
                projectDescription={projText}
                textOrder={1}
                imageOrder={2}
              />
              <Project
                projectName="LeetCode AC Count"
                projectDescription={projText}
                textOrder={2}
                imageOrder={1}
              />
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

export default Projects;
