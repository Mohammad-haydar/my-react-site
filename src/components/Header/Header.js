import React from "react";
import { NavLink } from "react-router-dom";

// import HeaderItem from "./HeaderItem/HeaderItem";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <nav className="nav-container">
          <h3>Melissa Astbury</h3>
          <ul>
            <li className="nav-item">
              <NavLink to="/" exact activeClassName="nav-item active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/experience" exact activeClassName="nav-item active">
                Experience
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

//   <HeaderItem link="/" exact>
//               Home
//             </HeaderItem>
//             <HeaderItem link="/experience" exact>
//               Experience
//             </HeaderItem>
