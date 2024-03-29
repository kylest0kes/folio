import React from "react";
import "./LeftSide.css";

import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftSide = () => {
  return (
    <div className="ls-container">
      <ul className="social-list">
        <li className="social-li">
          <a
            href="https://github.com/kylest0kes"
            target="blank"
            className="github-icon"
          ><FontAwesomeIcon className="social-icons" icon={faGithubSquare} /></a>
        </li>
        <li className="social-li">
          <a
            href="https://www.linkedin.com/in/kylest0kes/"
            target="blank"
            className="linkedin-icon"
          ><FontAwesomeIcon className="social-icons" icon={faLinkedin} /></a>
        </li>
        <li className="social-li">
          <a
            href="mailto: kylestokes1551@gmail.com"
            className="email-icon"
          ><FontAwesomeIcon className="social-icons" icon={faEnvelope} /></a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSide;
