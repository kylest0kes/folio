import React from "react";
import useScrollDirection from "../../Hooks/useScrollDirection";
import useScrollingState from "../../Hooks/useScrollingState";
import Hamburger from "../Hamburger/Hamburger";

import "./MobileHeader.css";

const MobileHeader = () => {

  const isUserScrolling = useScrollingState();
  const scrollDirection = useScrollDirection();

  return (
    <div className={`nav-bar ${ scrollDirection === "down" ? "hide" : "show"} ${isUserScrolling ? "scrollStyle" : ""}`}>
      <span className="logo" onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("about-secton");
              if (target) target.scrollIntoView({ behavior: "smooth"});
            }}>KS</span>
      <div className="hamburger">
        <Hamburger />
      </div>
    </div>
  );
};

export default MobileHeader;
