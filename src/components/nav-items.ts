import {
  faHouse,
  faLightbulb,
  faRoad,
  faToolbox,
  faTrophy,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default [
  {
    icon: faHouse,
    route: '/',
    pageName: 'Home',
  },
  {
    icon: faUser,
    route: '/about',
    pageName: 'About',
  },
  {
    icon: faLightbulb,
    route: '/projects',
    pageName: 'Projects',
  },
  {
    icon: faToolbox,
    route: '/skills',
    pageName: 'Skills',
  },
  {
    icon: faRoad,
    route: '/experience',
    pageName: 'Experience',
  },
  {
    icon: faTrophy,
    route: '/achievements',
    pageName: 'Achievements',
  },
];
