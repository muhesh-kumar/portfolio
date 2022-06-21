import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faLightbulb,
  faRoad,
  faToolbox,
  faTrophy,
  faUser,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import './BottomBar.scss';

const navItems = [
  {
    icon: faHouse,
    route: '/',
  },
  {
    icon: faUser,
    route: '/about',
  },
  {
    icon: faLightbulb,
    route: '/projects',
  },
  {
    icon: faToolbox,
    route: '/skills',
  },
  {
    icon: faRoad,
    route: '/journey',
  },
  {
    icon: faTrophy,
    route: '/achievements',
  },
];

const BottomBar = () => {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="bottom__content">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="bottom-bar__container">
        {navItems.map((navItem) => {
          return (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavLink to={navItem.route}>
              {({ isActive }) => (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <motion.div
                  className={`bottom-bar__icon-container ${
                    isActive ? 'fa-bounce' : ''
                  }`}
                  // style={isActive ? { '--fa-animation-duration': '2s' } : {}}
                >
                  {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <FontAwesomeIcon
                    icon={navItem.icon}
                    size={isActive ? '3x' : '2x'}
                    color={isActive ? '#188aec' : '#4B5563'}
                  />
                </motion.div>
              )}
            </NavLink>
          );
        })}
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="icon-separator"></div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <a href="#">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <FontAwesomeIcon
              icon={faSun}
              size="2x"
              color="#4B5563"
              className="bottom-bar__icon-container"
            />
          </a>
        </div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <a href="#">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <FontAwesomeIcon
              icon={faMoon}
              size="2x"
              color="#4B5563"
              className="bottom-bar__icon-container"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
