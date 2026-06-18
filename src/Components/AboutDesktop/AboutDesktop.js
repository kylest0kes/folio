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
            Developer with five years of experience building software for the
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
            <div className="tech-stack">
              <p className="tech-label">
                <strong>Tech Stack</strong>
              </p>
              <div className="tech-grid">
                <div className="tech-row">
                  <span className="tech-cat">Languages</span>
                  <span className="tech-items">
                    JavaScript · TypeScript · Python · Java · SQL · HTL
                  </span>
                </div>
                <div className="tech-row">
                  <span className="tech-cat">Frontend</span>
                  <span className="tech-items">
                    Angular · React · NgRx · RxJS · HTML/CSS
                  </span>
                </div>
                <div className="tech-row">
                  <span className="tech-cat">Backend</span>
                  <span className="tech-items">
                    Node.js · Express · Flask · Spring/EE
                  </span>
                </div>
                <div className="tech-row">
                  <span className="tech-cat">CMS</span>
                  <span className="tech-items">Adobe AEM · Adobe Target</span>
                </div>
                <div className="tech-row">
                  <span className="tech-cat">DevOps</span>
                  <span className="tech-items">
                    AWS · Docker · Jenkins · CI/CD · GitHub/Bitbucket
                  </span>
                </div>
                <div className="tech-row">
                  <span className="tech-cat">Testing</span>
                  <span className="tech-items">
                    Selenium · JUnit · Mockito · Postman · Karate
                  </span>
                </div>
                <div className="tech-row">
                  <span className="tech-cat">Databases</span>
                  <span className="tech-items">
                    MySQL · MongoDB · SQLite · Postgres
                  </span>
                </div>
                <div className="tech-row">
                  <span className="tech-cat">Methodologies</span>
                  <span className="tech-items">
                    Agile/Scrum · TDD · Jira · Confluence
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
