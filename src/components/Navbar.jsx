import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      {/* <img src={hamburgerMenu} alt="" /> */}

      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <a href="https://github.com/ElifUlug" target="_blank" rel="noreferrer">
        GITHUB
      </a>
      <NavLink to="/login">LOGOUT</NavLink>
    </div>
  );
}

export default Navbar;
