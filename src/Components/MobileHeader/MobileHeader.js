import React from "react";
import useScrollDirection from "../../Hooks/useScrollDirection";
import Hamburger from "../Hamburger/Hamburger";

import "./MobileHeader.css";

const MobileHeader = () => {

  const scrollDirection = useScrollDirection();

  return (
    <div className={`nav-bar ${ scrollDirection === "down" ? "hide" : "show"}`}>
      <span className="logo">KS</span>
      <div className="hamburger">
        <Hamburger />
      </div>
    </div>
  );
};

export default MobileHeader;
