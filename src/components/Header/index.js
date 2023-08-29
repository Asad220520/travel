import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <h1>LOGO</h1>
          </div>
          <nav className="header__menu">
            <NavLink>Regions</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Culture</NavLink>
            <NavLink>Gallery</NavLink>
            <NavLink>Routes</NavLink>
          </nav>
          <div className="header__btn">
            <select>
              <option value="en-En">Eng</option>
              <option value="ru-Ru">Ru</option>
              <option value="kg-Kg">Kg</option>
            </select>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
