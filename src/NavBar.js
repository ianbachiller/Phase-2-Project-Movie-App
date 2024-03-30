import React from "react";
import NewMovieForm from "./NewMovieForm";

function NavBar() {
  return (
    <div className="navbar">
      <h1 className="title">Movie Night!</h1>
      <NewMovieForm />

      <input placeholder="Search movie"></input>
    </div>
 
  );
}

export default NavBar;
