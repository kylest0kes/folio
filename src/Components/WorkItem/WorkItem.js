import React, { useEffect } from "react";

import JOBS from "../../Assets/jobs/jobs";

import $ from "jquery";

import "./WorkItem.css";
import WorkTab from "../WorkTab/WorkTab";
import WorkTabContent from "../WorkTabContent/WorkTabContent";

const WorkItem = (props) => {
  /* need to refactor this to make it better, also add style of font color to 
  the orange that is used in app */
  useEffect(() => {
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
    $("#tab5_content").hide();

    $("#tab1").click(function () {
      $("#tab1_content").show();
      $("#tab1").css("background-color", "#51738d");
      $("#tab2").css("background-color", "#0a2a42");
      $("#tab3").css("background-color", "#0a2a42");
      $("#tab4").css("background-color", "#0a2a42");
      $("#tab5").css("background-color", "#0a2a42");
      $("#tab2_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
      $("#tab5_content").hide();
    });

    $("#tab2").click(function () {
      $("#tab2_content").show();
      $("#tab1").css("background-color", "#0a2a42");
      $("#tab2").css("background-color", "#51738d");
      $("#tab3").css("background-color", "#0a2a42");
      $("#tab4").css("background-color", "#0a2a42");
      $("#tab5").css("background-color", "#0a2a42");
      $("#tab1_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
      $("#tab5_content").hide();
    });

    $("#tab3").click(function () {
      $("#tab3_content").show();
      $("#tab1").css("background-color", "#0a2a42");
      $("#tab2").css("background-color", "#0a2a42");
      $("#tab3").css("background-color", "#51738d");
      $("#tab4").css("background-color", "#0a2a42");
      $("#tab5").css("background-color", "#0a2a42");
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab4_content").hide();
      $("#tab5_content").hide();
    });

    $("#tab4").click(function () {
      $("#tab4_content").show();
      $("#tab1").css("background-color", "#0a2a42");
      $("#tab2").css("background-color", "#0a2a42");
      $("#tab3").css("background-color", "#0a2a42");
      $("#tab4").css("background-color", "#51738d");
      $("#tab5").css("background-color", "#0a2a42");
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab3_content").hide();
      $("#tab5_content").hide();
    });

    $("#tab5").click(function () {
      $("#tab5_content").show();
      $("#tab1").css("background-color", "#0a2a42");
      $("#tab2").css("background-color", "#0a2a42");
      $("#tab3").css("background-color", "#0a2a42");
      $("#tab4").css("background-color", "#0a2a42");
      $("#tab5").css("background-color", "#51738d");
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
    });
  }, []);

  return (
    <div class="tab_div">
      <div class="tabs_menu">
        <ul class="tabs">
          {JOBS.map((job) => {
            return <WorkTab key={job.id} tabnum={job.tabnum} job={job.job} />;
          })}
        </ul>
      </div>

      <div class="tab_content">
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
