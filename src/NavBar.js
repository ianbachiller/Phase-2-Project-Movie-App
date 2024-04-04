import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Main
      </NavLink>
      <NavLink to="/home" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/movies" className="nav-link">
        Movies
      </NavLink>
      <NavLink to="/form" className="nav-link">
        Add or Search A Movie
      </NavLink>
    </nav>
  );
}

export default NavBar;
