import React from "react";

import "./WorkItem.css";

const WorkItem = (props) => {
  return (
    <div className="tab-section">
      <label for={props.tabnum} className="tab-header">
        {props.job}
      </label>
      <input type="radio" name="header-tab" id={props.tabnum} />
      <div className="tab-content">
        <span className="role">{props.role}</span>
        <br />
        <br />
        {props.date}
        <br />
        <br />
        {props.jobdesc}
      </div>
    </div>
  );
};

export default WorkItem;
