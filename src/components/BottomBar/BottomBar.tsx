// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  // {
  //   icon: faRoad,
  //   route: '/journey',
  // },
  // {
  //   icon: faTrophy,
  //   route: '/achievements',
  // },
];

const BottomBar = () => {
  return (
    <div className="bottom__content">
      <div className="bottom-bar__container">
        {navItems.map((navItem) => {
          return (
            <div></div>
            // <a href={navItem.route}>
            //   {({ isActive }) => (
            //     <motion.div
            //       className={`bottom-bar__icon-container ${isActive ? 'fa-bounce' : ''
            //         }`}
            //     // style={isActive ? { '--fa-animation-duration': '2s' } : {}}
            //     >
            //       <FontAwesomeIcon
            //         icon={navItem.icon}
            //         size={isActive ? '3x' : '2x'}
            //         color={isActive ? '#188aec' : '#4B5563'}
            //       />
            //     </motion.div>
            //   )}
            // </a>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
