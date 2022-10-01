import React, { useEffect } from "react";

import JOBS from "../../Assets/jobs/jobs";

import $ from "jquery";

import "./WorkItem.css";
import WorkTab from "../WorkTab/WorkTab";
import WorkTabContent from "../WorkTabContent/WorkTabContent";

const WorkItem = (props) => {
  /* need to refactor this to make it better: also add style of font color to 
  the orange that is used in app */
  useEffect(() => {
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
    $("#tab5_content").hide();

    $("#tab1").click(function () {
      $("#tab1_content").show();
      $("#tab1").css({color: "#ff4c29"});
      $("#tab2").css({color: "#3c5e78"});
      $("#tab3").css({color: "#3c5e78"});
      $("#tab4").css({color: "#3c5e78"});
      $("#tab5").css({color: "#3c5e78"});
      $("#tab2_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
      $("#tab5_content").hide();
    });

    $("#tab2").click(function () {
      $("#tab2_content").show();
      $("#tab1").css({color: "#3c5e78"});
      $("#tab2").css({color: "#ff4c29"});
      $("#tab3").css({color: "#3c5e78"});
      $("#tab4").css({color: "#3c5e78"});
      $("#tab5").css({color: "#3c5e78"});
      $("#tab1_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
      $("#tab5_content").hide();
    });

    $("#tab3").click(function () {
      $("#tab3_content").show();
      $("#tab1").css({color: "#3c5e78"});
      $("#tab2").css({color: "#3c5e78"});
      $("#tab3").css({color: "#ff4c29"});
      $("#tab4").css({color: "#3c5e78"});
      $("#tab5").css({color: "#3c5e78"});
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab4_content").hide();
      $("#tab5_content").hide();
    });

    $("#tab4").click(function () {
      $("#tab4_content").show();
      $("#tab1").css({color: "#3c5e78"});
      $("#tab2").css({color: "#3c5e78"});
      $("#tab3").css({color: "#3c5e78"});
      $("#tab4").css({color: "#ff4c29"});
      $("#tab5").css({color: "#3c5e78"});
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab3_content").hide();
      $("#tab5_content").hide();
    });

    $("#tab5").click(function () {
      $("#tab5_content").show();
      $("#tab1").css({color: "#3c5e78"});
      $("#tab2").css({color: "#3c5e78"});
      $("#tab3").css({color: "#3c5e78"});
      $("#tab4").css({color: "#3c5e78"});
      $("#tab5").css({color: "#ff4c29"});
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
    });
  }, []);

  return (
    <div className="tab_div">
      <div className="tabs_menu">
        <ul className="tabs">
          {JOBS.map((job) => {
            return <WorkTab key={job.id} tabnum={job.tabnum} job={job.job} />;
          })}
        </ul>
      </div>

      <div className="tab_content">
        {JOBS.map((job) => {
          return (
            <WorkTabContent
              key={job.id}
              tabcontent={job.tabcontent}
              role={job.role}
              date={job.date}
              jobdesc={job.jobdesc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkItem;
