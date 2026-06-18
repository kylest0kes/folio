import React from "react";
import kyle from "../../Assets/imgs/kyle.jpg";

import "./AboutDesktop.css";

const AboutDesktop = () => {
  return (
    <div className="bio-container" id="about-me-section">
      <h1 className="bio-header">1. About Me...</h1>
      <div className="bio-card">
        <div className="bio-card-img">
          <img src={kyle} className="img-responsive" alt="kyle" />
        </div>

        <div className="bio-card-text">
          <span className="about-me-desc">
            <span className="hi">Hi!</span> My name is Kyle. I'm a Full Stack
            Developer with three years of experience building software for the
            fintech industry. I've worked with major financial clients to create
            polished, high-performance digital products that people actually
            use.
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
            <div className="tech-stack">
              <p className="tech-label">
                <strong>Tech Stack</strong>
              </p>
              <div className="tech-grid">
                <div>
                  <span className="tech-cat">Frontend</span>
                  <span className="tech-items">
                    React · Angular · TypeScript · JavaScript
                  </span>
                </div>
                <div>
                  <span className="tech-cat">Backend</span>
                  <span className="tech-items">Node.js · Python · Java</span>
                </div>
                <div>
                  <span className="tech-cat">Database</span>
                  <span className="tech-items">MongoDB · MySQL</span>
                </div>
                <div>
                  <span className="tech-cat">Tools</span>
                  <span className="tech-items">
                    AEM · Adobe Target · VS Code · IntelliJ · VIM · GitHub
                  </span>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutDesktop;
