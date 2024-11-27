import React from "react";
import { useMediaQuery } from "react-responsive";

import AboutDesktop from "../../Components/AboutDesktop/AboutDesktop";
import AboutResp from "../../Components/AboutResp/AboutResp";



const AboutMe = () => {
  const useResp = useMediaQuery({ query: "(max-width: 940px)"});

  return (
    <div className="about-parent-container">
      {!useResp && <AboutDesktop />}
      {useResp && <AboutResp />}
    </div>

  );
};

export default AboutMe;
