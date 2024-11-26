import React from "react";
import "./WorkTab.css";

const WorkTab = ({ tabnum, job, onClick, style }) => {
  return (
    <li id={tabnum} onClick={onClick} style={style} className="work-tab">
      {job}
    </li>
  );
};

export default WorkTab;