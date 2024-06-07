import React from "react";
import WorkItem from "../../Components/WorkItem/WorkItem";

import "./Work.css";

const Work = () => { 
  return (
    <div className="work-container" id="work-section">
      <p className="work-header">2. Work...</p>
      <div className="work-item-container">
        <WorkItem />     
      </div>
    </div>
  );
};

export default Work;
