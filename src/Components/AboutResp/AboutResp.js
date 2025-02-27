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
          <span className="hi">Hi!</span> My name is Kyle, and I am a proficient Full Stack Developer with three years of expertise in the fintech industry. I specialize in creating seamless, high-quality digital experiences for high-profile clients and their customers.
          <br />
          <br />
          I honed my skills at the University of Central Florida, as well as through various personal projects and extensive coursework on Udemy. Currently, I work at Capco, where I focus on building accessible, dynamic, and inclusive products for various financial clients, leveraging a broad range of technologies to deliver top-tier solutions.
          <br />
          <br />
          Tech I have been working with recently:
          <br />
          <br />
          <ul className="tech-resp">
            <li>React</li>
            <li>Angular</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Java</li>
            <li>Adobe Experience Manager</li>
            <li>Adobe Target</li>
            <li>VIM</li>
            <li>VSCode</li>
            <li>IntelliJ</li>
            <li>Github</li>
            <li>Github Copilot</li>
            <li>ChatGPT</li>
            <li>Claude</li>
            <li>Perplexity</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default AboutResp;
