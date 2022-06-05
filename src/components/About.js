import { motion } from 'framer-motion';
import './About.css';

import Header from './Header';
import BottomBar from './BottomBar';
import Button from './Button';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const About = () => {
  return (
    <motion.div
      variants={animations}
      className="App"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header />
      <div className="home__container">
        <div className="home__content">
          <div className="home__content__text">
            <div>
              <h1>About Me 👨‍🦰</h1>
              <p>A brief intro to who i am and how i do what i do:</p>
            </div>
            <div>
              <p>
                I am <span className="highlighted-text">MUHESH</span>
              </p>
            </div>
            <div>
              <p>
                A Sophomore Computer Science student from India. I got into tech
                while i was student at olabisi onabanjo university, Bsc Zoology.
                I've always been fascinated with how things work. fast forward
                to 2 years later and i'm now designing landing pages for
                business around the world.
              </p>
            </div>
            <div>
              <p>
                I believe i've got the right skills and technologies to take
                your online presence on the level it truly deserves. Your
                website should be your no1 sales agent and its works 24/7, Get a
                quote now that's best for your business.
              </p>
            </div>
          </div>
          <div className="home__content__btn">
            <Button buttonText="Say Hello" />
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

export default About;
