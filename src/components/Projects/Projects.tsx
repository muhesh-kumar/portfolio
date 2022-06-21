import { motion } from 'framer-motion';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Header/Header' was resolved to '/home/m... Remove this comment to see the full error message
import Header from '../Header/Header';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../BottomBar/BottomBar' was resolved to '/... Remove this comment to see the full error message
import BottomBar from '../BottomBar/BottomBar';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Project/Project' was resolved to '/home... Remove this comment to see the full error message
import Project from '../Project/Project';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../BackgroundBlurEllipse/BackgroundBlurEll... Remove this comment to see the full error message
import BackgroundBlurEllipse from '../BackgroundBlurEllipse/BackgroundBlurEllipse';

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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <motion.div
      className="projects"
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
              <h1>Projects💡</h1>
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div>
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <p>Some things I've been working on in the past few months:</p>
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="projects-container">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Project
                projectName="GitHub Repo Lister"
                projectDescription={projText}
                textOrder={1}
                imageOrder={2}
              />
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Project
                projectName="LeetCode AC Count"
                projectDescription={projText}
                textOrder={2}
                imageOrder={1}
              />
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

export default Projects;
