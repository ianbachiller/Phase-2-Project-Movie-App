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
        Ciné
      </h1>
      <h2 className="title">App that ends your movie indecision!</h2>
    </div>
  );
}

export default Header;
