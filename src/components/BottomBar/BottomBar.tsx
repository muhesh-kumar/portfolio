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
    <div className="bottom__content">
      <div className="bottom-bar__container">
        {navItems.map((navItem) => {
          return (
            <NavLink to={navItem.route}>
              {({ isActive }) => (
                <motion.div
                  className={`bottom-bar__icon-container ${
                    isActive ? 'fa-bounce' : ''
                  }`}
                  // style={isActive ? { '--fa-animation-duration': '2s' } : {}}
                >
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
        <div className="icon-separator"></div>
        <div>
          <a href="#">
            <FontAwesomeIcon
              icon={faSun}
              size="2x"
              color="#4B5563"
              className="bottom-bar__icon-container"
            />
          </a>
        </div>
        <div>
          <a href="#">
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
