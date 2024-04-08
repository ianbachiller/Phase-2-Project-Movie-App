import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import duke5 from "./duke5.JPG"
function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <h1 className="home">My dog happily welcomes you</h1>
      <div className="image-container">
        <img
          id="duke5"
          // src="https://c.tenor.com/rDNPdB5bOeEAAAAd/tenor.gif"
          src= {duke5}
          alt="duke5"
        />
      </div>
    </>
  );
}

export default Home;
