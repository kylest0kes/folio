import React, { useState } from "react";
import useClickOutside from "../../Hooks/useClickOutside";

import "./Hamburger.css";

const Hamburger = () => {

  const [isOpen, setIsOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  const hamburgerHandler = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  

  return (
    <div ref={domNode}>
      <button
        className={`hamburger-button ${isOpen ? "open" : "close"}`}
        onClick={hamburgerHandler}
      />
      <div className={`panel ${isOpen ? "open" : "close"}`} >
        <ul className="list">
          <li className="list-li">
            <a className="list-a" href="=" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("about-me-section");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}>
              <span className="num">1.</span> ABOUT
            </a>
          </li>
          <li className="list-li">
            <a className="list-a" href="=" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("work-section");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}>
              <span className="num">2.</span> WORK
            </a>
          </li>
          <li className="list-li">
            <a className="list-a" href="=" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("projects-section");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}>
              <span className="num">3.</span> PROJECTS
            </a>
          </li>
          <li className="list-li">
            <a className="list-a" href="=" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("contact-section");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}>
              <span className="num">4.</span> CONTACT
            </a>
          </li>
          <li className="list-li">
            <a className="list-a list-res" href="/Assets/resume/Resume.pdf" target="_blank">
              RESUME
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
