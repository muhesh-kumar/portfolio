import { motion } from 'framer-motion';

import Header from '../../components/Header/Header';
import BottomBar from '../../components/BottomBar/BottomBar';
import Project from '../../components/Project/Project';
import BackgroundBlurEllipse from '../../components/BackgroundBlurEllipse/BackgroundBlurEllipse';

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

      <div className="home">
        <div className="home__content">
          <div className="home__text">
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
                projectImageURL='assets/images/github-repo-lister.png'
                textOrder={1}
                imageOrder={2}
              />
              <Project
                projectName="LeetCode AC Count"
                projectDescription={projText}
                projectImageURL='assets/images/leetcode-ac-count.jpg'
                textOrder={2}
                imageOrder={1}
              />
            </div>
          </div>
        </div>

        <BackgroundBlurEllipse />
      </div>
      <BottomBar />
    </motion.div>
  );
};

export default Projects;
