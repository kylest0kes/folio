import React from "react";
import Hamburger from "../Hamburger/Hamburger";

import "./MobileHeader.css";

const MobileHeader = () => {
  // 860px is the breakpoint to switch to hamburger menu
  return (
    <div className="nav-bar">
      <span className="logo">KS</span>
      <div className="hamburger">
        <Hamburger />
      </div>
    </div>
  );
};

export default MobileHeader;
