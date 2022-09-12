import React from "react";
import kyle from "../../Assets/imgs/kyle.jpg";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="bio-container">
          <h1 className="bio-header">1. About Me----------------</h1>
      <div class="bio-card">
        <div class="bio-card-text">
          <span class="about-me-desc">
           Hello there! My name is Kyle and I blah blah blah blah blah skljdf asdf fd fdfasd fasdf 
           <br/><br/>
           Blah blah
           <br/><br/>
           Tech I have been working with recently:
           
          </span>
        </div>

        <div class="bio-card-img">
          <img src={kyle} class="img-responsive" alt="kyle" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
