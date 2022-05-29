import React from "react";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <div className="aboutContainer">
      <img src={aboutImage} alt="" className="aboutImage" />

      <div className="aboutParag">
        <h1>
          About Software Developer <span>Elif Ulug</span>
        </h1>
        <h2>Hi, I’m a Front End Developer </h2>
      </div>
    </div>
  );
}

export default About;
