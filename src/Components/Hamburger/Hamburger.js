import React, { useState } from "react";

import './Hamburger.css';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className='hamburger-button'
      />
      {/* <div className={`panel ${isOpen ? "open" : "close"}`}>
        <ul>
          <li>
            <a href="#">You</a>
          </li>
          <li>
            <a href="#">Look</a>
          </li>
          <li>
            <a href="#">Nice</a>
          </li>
          <li>
            <a href="#">Today</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Hamburger;
