import React from "react";

import "./WorkTabContent.css";

const WorkTabContent = ({ isActive, tabcontent, role, date, jobdesc }) => {
  return (
    <div style={{ display: isActive ? "block" : "none" }}>
      <h2>{tabcontent}</h2>
      <p>{role}</p>
      <p>{date}</p>
      <p>{jobdesc}</p>
    </div>
  );
};

export default WorkTabContent;
