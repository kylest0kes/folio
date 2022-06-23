import React from 'react';

import './Header.css';

const Header = () => {
  // 860px is the breakpoint to switch to hamburger menu
  return (
    <div className="nav-bar">
        <span className="logo">KS</span>
        <ul>
            <li><a href="="><span className="num">1.</span> ABOUT</a></li>
            <li><a href="="><span className="num">2.</span> WORK</a></li>
            <li><a href="="><span className="num">3.</span> PROJECTS</a></li>
            <li><a href="="><span className="num">4.</span> CONTACT</a></li>
            <li><a href="=" className="resume">RESUME</a></li>
        </ul>
  </div>
  )
}

export default Header;