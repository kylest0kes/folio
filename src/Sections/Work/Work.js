import React from "react";
import WorkItem from "../../Components/WorkItem/WorkItem";
import JOBS from "../../Assets/jobs/jobs";

import "./Work.css";

const Work = () => {
  const jobs = JOBS.map((job) => (
    <WorkItem 
      id={job.id}
      tabnum={job.tabnum}
      job={job.job}
      role={job.role}
      date={job.date}
      jobdesc={job.jobdesc}
    />
  ));  


  return (
    <div className="work-container">
      <p className="work-header">2. Work...</p>
      <div className="tab-area">
         {jobs}       
      </div>
    </div>
  );
};

export default Work;
