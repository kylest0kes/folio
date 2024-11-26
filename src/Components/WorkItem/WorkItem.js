import React, { useState } from "react";
import JOBS from "../../Assets/jobs/jobs";

import "./WorkItem.css";
import WorkTab from "../WorkTab/WorkTab";
import WorkTabContent from "../WorkTabContent/WorkTabContent";

const WorkItem = () => {
  const [activeTab, setActiveTab] = useState(JOBS[0]?.tabnum || "tab1"); // Default active tab is tab 1
  const activeColor = "#ff4c29";
  const inactiveColor = "#3c5e78";

  const handleTabClick = (tabNum) => {
    setActiveTab(tabNum);
  };

  return (
    <div className="tab_div">
      {/* Tabs Menu */}
      <div className="tabs_menu">
        <ul className="tabs">
          {JOBS.map((job) => (
            <WorkTab
              key={job.id}
              tabnum={job.tabnum}
              job={job.job}
              onClick={() => handleTabClick(job.tabnum)}
              style={{ color: activeTab === job.tabnum ? activeColor : inactiveColor }}
            />
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="tab_content">
        {JOBS.map((job) => (
          <WorkTabContent
            key={job.id}
            isActive={activeTab === job.tabnum}
            tabcontent={job.job}
            role={job.role}
            date={job.date}
            jobdesc={job.jobdesc}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkItem;