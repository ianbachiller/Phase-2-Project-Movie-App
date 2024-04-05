import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/movies" className="nav-link">
        Movies
      </NavLink>
      <NavLink to="/winner" className="nav-link">
        Winner
      </NavLink>
    </nav>
  );
}

export default NavBar;
