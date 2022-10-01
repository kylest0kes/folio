import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-container' id='contact-section'>
      <h2 className='contact-title'>4. Contact Me!</h2>
      <p className='contact-text'>
        I would love to hear from you! Whether it be questions, comments, or just to say hello, I 
        always have an open inbox, and will get back to you as soon as I can!
      </p>
      <div className='contact-btn'>
      <a
            href="mailto: kylestokes1551@gmail.com"
            className="btn-icon"
          ><FontAwesomeIcon className="mail-btn-icon" icon={faEnvelope} /></a>
      </div>
    </div>
  )
}

export default Contact;