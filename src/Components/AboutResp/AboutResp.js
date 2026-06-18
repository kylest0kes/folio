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
          <span className="hi">Hi!</span> My name is Kyle. I'm a Full Stack
          Developer with three years of experience building software for the
          fintech industry. I've worked with major financial clients to create
          polished, high-performance digital products that people actually use.
          <br />
          <br />
          My foundation comes from UCF and years of self-directed learning
          through personal projects and coursework. Right now, I'm at Capco,
          where I build accessible, scalable web applications for financial
          services companies.
          <br />
          <br />
          Tech I have been working with recently:
          <br />
          <br />
          <div className="tech-stack-resp">
            <p className="tech-label-resp">
              <strong>Tech Stack</strong>
            </p>
            <div className="tech-grid-resp">
              <div className="tech-row-resp">
                <span className="tech-cat-resp">Frontend</span>
                <span className="tech-items-resp">
                  React · Angular · TypeScript · JavaScript
                </span>
              </div>
              <div className="tech-row-resp">
                <span className="tech-cat-resp">Backend</span>
                <span className="tech-items-resp">Node.js · Python · Java</span>
              </div>
              <div className="tech-row-resp">
                <span className="tech-cat-resp">Database</span>
                <span className="tech-items-resp">MongoDB · MySQL</span>
              </div>
              <div className="tech-row-resp">
                <span className="tech-cat-resp">Tools</span>
                <span className="tech-items-resp">
                  AEM · Adobe Target · VS Code · IntelliJ · VIM · GitHub
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default AboutResp;
