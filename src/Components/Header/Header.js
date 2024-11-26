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
              window.location.replace("/");
            }}>KS</span>
      <ul>
        <li className="nav-bar-li">
          <a
            className="nav-bar-a"
            href="="
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#about-me-section");
            }}
          >
            <span className="num">1.</span> ABOUT
          </a>
        </li>
        <li className="nav-bar-li">
          <a
            className="nav-bar-a"
            href="="
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#work-section");
            }}
          >
            <span className="num">2.</span> WORK
          </a>
        </li>
        <li className="nav-bar-li">
          <a
            className="nav-bar-a"
            href="="
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#projects-section");
            }}
          >
            <span className="num">3.</span> PROJECTS
          </a>
        </li>
        <li className="nav-bar-li">
          <a
            className="nav-bar-a"
            href="="
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#contact-section");
            }}
          >
            <span className="num">4.</span> CONTACT
          </a>
        </li>
        <li className="nav-bar-li">
          <a className="nav-bar-a resume" href="/Assets/resume/Resume.pdf">
            RESUME
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
