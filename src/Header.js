import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function handleTitleClick() {
    navigate("/");
  }
  return (
    <div className="header">
      <h1 className="title" onClick={handleTitleClick}>
        Movie Night!
      </h1>
      <h2 className="title">Where the movie with the most likes wins!</h2>
    </div>
  );
}

export default Header;
