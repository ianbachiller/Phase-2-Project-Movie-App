import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";

function About() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="about">
        <p>
        Stuck in a movie maze with your crew? Fret not! This app is here to rescue your movie night from eternal indecision! 🎬✨
        </p>
      </div>
    </div>
  );
}

export default About;
