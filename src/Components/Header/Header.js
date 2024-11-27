import React from "react";
import useScrollDirection from "../../Hooks/useScrollDirection";
import useScrollingState from "../../Hooks/useScrollingState";

import "./Header.css";

const Header = () => {

  const isUserScrolling = useScrollingState();
  const scrollDirection = useScrollDirection();

  return (
    <div className={`nav-bar ${ scrollDirection === "down" ? "hide" : "show"} ${isUserScrolling ? "scrollStyle" : ""}`}>
      <span className="logo" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("about-section");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}>KS</span>
      <ul>
        <li className="nav-bar-li">
          <a
            className="nav-bar-a"
            href="#about-me-section"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("about-me-section");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}
          >
            <span className="num">1.</span> ABOUT
          </a>
        </li>
        <li className="nav-bar-li">
          <a
            className="nav-bar-a"
            href="#work-section"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("work-section");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}
          >
            <span className="num">2.</span> WORK
          </a>
        </li>
        <li className="nav-bar-li">
          <a
            className="nav-bar-a"
            href="#projects-section"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("projects-section");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}
          >
            <span className="num">3.</span> PROJECTS
          </a>
        </li>
        <li className="nav-bar-li">
          <a
            className="nav-bar-a"
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("contact-section");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}
          >
            <span className="num">4.</span> CONTACT
          </a>
        </li>
        <li className="nav-bar-li">
          <a className="nav-bar-a resume" href="/Assets/resume/Resume.pdf" target="_blank">
            RESUME
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
