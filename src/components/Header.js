import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header__container">
      <NavLink to="/">
        <h1 className="header__text">Muhesh</h1>
      </NavLink>
    </div>
  );
};

export default Header;
