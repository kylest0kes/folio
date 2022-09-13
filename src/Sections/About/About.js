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
              I am a software developer who specializes in building high quality,
              seamless online products. Currently I spend my time transforming the digital 
              experiences of the financial services industry with 
              <a className="capco" target='blank' href="https://www.capco.com">Capco</a>.
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
