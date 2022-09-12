import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-info">
          <h2>Hello, my name is</h2>
          <h1 className="name">Kyle Stokes.</h1>
          <h1 className="below-name">I build things with code.</h1>
          <div className="about-text-sec">
            <h3 className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              placerat, tortor vitae consectetur scelerisque, ligula metus dictum
              augue, in tristique neque purus et nunc. 
            </h3>
          </div>
          <br/>
          <a className="about-btn" href="=">Check Out My Work</a>
        </div>
      </div>
    </div>
  );
};

export default About;
