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

import './BottomBar.css';

const icons = [
  faHouse,
  faUser,
  faLightbulb,
  faToolbox,
  faRoad,
  faTrophy,
  faSun,
  faMoon,
];

const BottomBar = () => {
  return (
    <div className="bottom__content">
      <div className="bottom-bar__container">
        {icons.map((icon) => {
          return (
            <a href="#">
              <div className="bottom-bar__icon-container">
                <FontAwesomeIcon icon={icon} size="3x" color="#188aec" />
              </div>
            </a>
          );
        })}

        {/* <a href="">
        <div className="bottom-bar__icon-container selected">
          <FontAwesomeIcon icon={faHouse} size="3x" color="#188aec" />
        </div>
      </a>
      <a href="">
        <div className="bottom-bar__icon-container">
          <FontAwesomeIcon icon={faUser} size="3x" color="#188aec" />
        </div>
      </a>
      <a href="">
        <div className="bottom-bar__icon-container selected">
          <FontAwesomeIcon icon={faHouse} size="3x" color="#188aec" />
        </div>
      </a>
      <a href="">
        <div className="bottom-bar__icon-container selected">
          <FontAwesomeIcon icon={faHouse} size="3x" color="#188aec" />
        </div>
      </a>
      <a href="">
        <div className="bottom-bar__icon-container selected">
          <FontAwesomeIcon icon={faHouse} size="3x" color="#188aec" />
        </div>
      </a>
      <a href="">
        <div className="bottom-bar__icon-container selected">
          <FontAwesomeIcon icon={faHouse} size="3x" color="#188aec" />
        </div>
      </a>
      <a href="">
        <div className="bottom-bar__icon-container selected">
          <FontAwesomeIcon icon={faHouse} size="3x" color="#188aec" />
        </div>
      </a>
      <a href="">
        <div className="bottom-bar__icon-container selected">
          <FontAwesomeIcon icon={faHouse} size="3x" color="#188aec" />
        </div>
      </a>
      <a href="">
        <div className="bottom-bar__icon-container selected">
          <FontAwesomeIcon icon={faHouse} size="3x" color="#188aec" />
        </div>
      </a> */}
      </div>
    </div>
  );
};

export default BottomBar;
