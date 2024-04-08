import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/movies" className="nav-link">
        Movies
      </NavLink>
      <NavLink to="/winner" className="nav-link">
        Winner(s)
      </NavLink>
      <NavLink to="/ratings" className="nav-link">
        IMDB Ratings
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;
