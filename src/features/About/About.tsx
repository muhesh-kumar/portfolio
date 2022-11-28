import { motion } from 'framer-motion';

import Header from '../../components/Header/Header';
import BottomBar from '../../components/BottomBar/BottomBar';
import Button from '../../components/Button/Button';
import BackgroundBlurEllipse from '../../components/BackgroundBlurEllipse/BackgroundBlurEllipse';

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

      <div className="home">
        <div className="home__content">
          <div className="home__text">
            <div>
              <h1>About Me 👨‍🦰</h1>
              <p>A brief intro to who i am and what i do:</p>
            </div>
            <div>
              <p>
                I am <span className="highlighted-text">MUHESH</span>
              </p>
            </div>
            <div>
              <p>
                A Sophomore Computer Science student from India. I like to solve real world problems with software. I'm an aspiring Software Engineer with experience in Full Stack Web Development and some Machine Learning tasks. I'm also a Competitive Programmer who participates in various coding competitions like Kickstart, Hackercup, Hash Code and so on.
              </p>
            </div>
            <div>
              <p>
                I believe I've got the right skills and technologies to take
                your idea and build a full fledged web application with maintainable code. I'm open to explore and learn other fields of Software Engineering such as Mobile App Development and DevOps.
              </p>
            </div>
          </div>
          <div className="home__btn">
            <Button buttonText="Say Hello" />
          </div>
        </div>

        <BackgroundBlurEllipse />
      </div>
      <BottomBar />
    </motion.div>
  );
};

export default About;
