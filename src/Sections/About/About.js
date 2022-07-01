import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="about-card">
      <div className="about-info">
        <h2>Hello, my name is</h2>
        <h1 className="name">Kyle Stokes.</h1>
        <h1 className="below-name">I build things for the Internet.</h1>
        <div className="about-text-sec">
          <h3 className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            placerat, tortor vitae consectetur scelerisque, ligula metus dictum
            augue, in tristique neque purus et nunc. Aliquam a sollicitudin
            ligula, nec vehicula dui. Cras varius nunc ac venenatis tempus. Ut
            posuere ut velit ut sollicitudin. Aenean id orci quis sem faucibus
            tempor quis vitae erat. Nulla lacus odio, sodales pulvinar sagittis
            sed, laoreet sit amet lectus. Morbi vestibulum odio ipsum, quis
            sollicitudin augue consectetur vel. Sed tempus ut ex sit amet
            molestie.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
