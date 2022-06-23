import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="nav-bar">
        <span className="logo">KS</span>
        <ul>
            <li className='nav-bar-li'><a className='nav-bar-a' href="="><span className="num">1.</span> ABOUT</a></li>
            <li className='nav-bar-li'><a className='nav-bar-a' href="="><span className="num">2.</span> WORK</a></li>
            <li className='nav-bar-li'><a className='nav-bar-a' href="="><span className="num">3.</span> PROJECTS</a></li>
            <li className='nav-bar-li'><a className='nav-bar-a' href="="><span className="num">4.</span> CONTACT</a></li>
            <li className='nav-bar-li'><a className="nav-bar-a resume" href="=">RESUME</a></li>
        </ul>
  </div>
  )
}

export default Header;