import { motion } from 'framer-motion';

import Header from '../../components/Header/Header';
import BottomBar from '../../components/BottomBar/BottomBar';
import Project from '../../components/Project/Project';
import BackgroundBlurEllipse from '../../components/BackgroundBlurEllipse/BackgroundBlurEllipse';

import './Projects.scss';

import projects from '../../data/projectsData';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


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
              {projects.map((project, idx) => <Project
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                projectImageURL={project.projectImageURL}
                projectRepoURL={project.projectRepoURL}
                projectLiveURL={project.projectLiveURL}
                textOrder={idx % 2 === 1 ? 2 : 1}
                imageOrder={idx % 2 === 0 ? 2 : 1}
              />)}
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
