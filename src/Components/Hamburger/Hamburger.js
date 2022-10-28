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
              window.location.replace("/#about-me-section");
            }}>
              <span className="num">1.</span> ABOUT
            </a>
          </li>
          <li className="list-li">
            <a className="list-a" href="=" onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#work-section");
            }}>
              <span className="num">2.</span> WORK
            </a>
          </li>
          <li className="list-li">
            <a className="list-a" href="=" onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#projects-section");
            }}>
              <span className="num">3.</span> PROJECTS
            </a>
          </li>
          <li className="list-li">
            <a className="list-a" href="=" onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#contact-section");
            }}>
              <span className="num">4.</span> CONTACT
            </a>
          </li>
          <li className="list-li">
            <a className="list-a list-res" href="=">
              RESUME
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
