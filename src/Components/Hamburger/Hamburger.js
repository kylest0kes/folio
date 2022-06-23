import React, { useState } from "react";

import './Hamburger.css';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={`hamburger-button ${isOpen ? "open" : "close"}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={`panel ${isOpen ? "open" : "close"}`}>
        <ul className="list">
        <li className='list-li'><a className='list-a' href="="><span className="num">1.</span> ABOUT</a></li>
            <li className='list-li'><a className='list-a' href="="><span className="num">2.</span> WORK</a></li>
            <li className='list-li'><a className='list-a' href="="><span className="num">3.</span> PROJECTS</a></li>
            <li className='list-li'><a className='list-a' href="="><span className="num">4.</span> CONTACT</a></li>
            <li className='list-li'><a className="list-a list-res" href="=">RESUME</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
