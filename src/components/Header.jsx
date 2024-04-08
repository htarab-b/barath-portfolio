import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Header.css";

function Header() {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/skillstack" activeClassName="active">
        Skill Stack
      </NavLink>
      <NavLink to="/contact" className="contact" activeClassName="active">
        Contact
      </NavLink>
    </div>
  );
}

export default Header;
