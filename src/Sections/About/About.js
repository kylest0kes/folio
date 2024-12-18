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
            <p className="about-text">
              I am a software developer who specializes in building high quality online products. Currently I spend my time transforming digital 
              experiences in the financial services industry with 
              <a className="capco" target='blank' href="https://www.capco.com">Capco</a>.
            </p>
          </div>
          <br/>
          <a className="about-btn" href="#projects-section" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("projects-section");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}>Check Out My Work</a>
        </div>
      </div>
    </div>
  );
};

export default About;
