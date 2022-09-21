import React from "react";

import "./WorkTabContent.css";

const WorkTabContent = (props) => {
  return (
    <div id={props.tabcontent}>
      <p> {props.role} </p>
      <br />
      <p> {props.date} </p>
      <br />
      <p> {props.jobdesc} </p>
    </div>
  );
};

export default WorkTabContent;
