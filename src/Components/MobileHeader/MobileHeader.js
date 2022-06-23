import React from "react";
import Hamburger from "../Hamburger/Hamburger";

import "./MobileHeader.css";

const MobileHeader = () => {
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
