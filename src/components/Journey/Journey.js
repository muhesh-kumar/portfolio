import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header/Header';
import BottomBar from '../BottomBar/BottomBar';
import Button from '../Button/Button';

import './Journey.scss';

import timelineElements from '../../data/timelineElements';

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Journey = () => {
  return (
    <motion.div
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
              <h1>My Journey💡</h1>
            </div>
            <div>
              <p>The journey I have been through for the past few years</p>
            </div>
            <div className="journey-container">
              <VerticalTimeline lineColor="#f3f4f6">
                {timelineElements.map((element) => {
                  const schoolIconStyle = {
                    fontSize: '5rem',
                    backgroundColor: 'white',
                  };
                  const showButton =
                    element.buttonText !== undefined &&
                    element.buttonText !== null &&
                    element.buttonText !== '';
                  return (
                    <VerticalTimelineElement
                      key={element.key}
                      date={element.date}
                      dateClassName="date"
                      className="vertical-timeline-element"
                      iconStyle={schoolIconStyle}
                      icon={<FontAwesomeIcon icon={faSchool} />}
                    >
                      <div className="vertical-timeline-element-container">
                        <div>
                          <h2 className="vertical-timeline-element-title">
                            {element.title}
                          </h2>
                          <h3 className="vertical-timeline-element-subtitle">
                            {element.location}
                          </h3>
                          <p id="description">{element.description}</p>
                        </div>
                        <div>
                          {showButton && (
                            <Button buttonText={element.buttonText} />
                            // <a
                            //   href="/"
                            //   // className={`button ${
                            //   //   isWorkIcon ? 'workButton' : 'schoolButton'
                            //   // }`}
                            // >
                            //   {element.buttonText}
                            // </a>
                          )}
                        </div>
                      </div>
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
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

export default Journey;