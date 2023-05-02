import React from "react";
import { Link } from "react-router-dom";
import {HiUserCircle} from "react-icons/hi";
import Logo from "../images/pointerpro_logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navabar__logo">
        <img src={Logo} alt="Logo" className="navbar__img" />
      </div>
      <div className="navbar__menu">
        <ul className="navbar__menu--ul">
          <li>
            <Link to="/" className="navbar__menu--li">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar__menu--li">
              Questionnaires
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar__menu--li">
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__icon">
      <HiUserCircle />
      </div>
    </div>
  );
};

export default Navbar;
