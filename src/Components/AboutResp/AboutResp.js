import React from "react";
import kyle from "../../Assets/imgs/kyle.jpg";

import "./AboutResp.css";

const AboutResp = () => {
  return (
    <div>
      <h1 className="bio-header">1. About Me...</h1>
      <div className="resp-img-div">
        <img src={kyle} className="img-resp" alt="kyle" />
      </div>

      <div className="bio-card-text-resp">
        <span className="about-me-desc-resp">
          Hey there! My name is Kyle and I live to create things that live in
          the digital space. My interest in web development started way back in
          2007 when I began tinkering with MySpace layouts and themes. This
          taught me a whole lot about the basics in web development.
          <br />
          <br />
          Jump ahead to present day, and I’ve had the privilege of learning
          Fullstack Web Development at the University of Central Florida,
          learning a multitude of different technologies through Udemy, as well
          as working at a major player in the financial services industry. My
          primary focus currently is building accessible, inclusive products and
          digital experiences at Capco for a variety of financial clients.
          <br />
          <br />
          Tech I have been working with recently:
          <br />
          <ul className="tech-resp">
            <li>React</li>
            <li>Angular</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>Drupal</li>
            <li>Javascript (ES6+)</li>
            <li>Matplotlib</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default AboutResp;
