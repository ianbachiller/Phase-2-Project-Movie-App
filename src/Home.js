import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <h1 className="home">Welcome to Ian's movie voting app!</h1>
      <div className="image-container">
        <img
          id="welcomeDoggo"
          src="https://c.tenor.com/rDNPdB5bOeEAAAAd/tenor.gif"
          alt="Welcome Doggo"
        />
      </div>
    </>
  );
}

export default Home;
