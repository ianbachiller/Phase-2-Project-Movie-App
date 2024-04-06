import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

function About() {
  return (
    <div>
        <Header />
        <NavBar />
      <div className="about">
        Have you and your friends or family been stuck on choosing which movie
        to watch on movie night? Well, fret not! This app is for you!
      </div>
    </div>
  );
}

export default About;
