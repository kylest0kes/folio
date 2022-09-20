import React, { useEffect } from "react";

import $ from "jquery";

import "./WorkItem.css";

const WorkItem = (props) => {
  useEffect(() => {
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();

    $("#tab1").click(function () {
      $("#tab1_content").show();
      $("#tab1").css("background-color", "#51738d");
      $("#tab2").css("background-color", "#335167");
      $("#tab3").css("background-color", "#335167");
      $("#tab4").css("background-color", "#335167");
      $("#tab2_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
    });

    $("#tab2").click(function () {
      $("#tab2_content").show();
      $("#tab1").css("background-color", "#335167");
      $("#tab2").css("background-color", "#51738d");
      $("#tab3").css("background-color", "#335167");
      $("#tab4").css("background-color", "#335167");
      $("#tab1_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
    });

    $("#tab3").click(function () {
      $("#tab3_content").show();
      $("#tab1").css("background-color", "#335167");
      $("#tab2").css("background-color", "#335167");
      $("#tab3").css("background-color", "#51738d");
      $("#tab4").css("background-color", "#335167");
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab4_content").hide();
    });

    $("#tab4").click(function () {
      $("#tab4_content").show();
      $("#tab4").css("background-color", "#51738d");
      $("#tab3").css("background-color", "#335167");
      $("#tab2").css("background-color", "#335167");
      $("#tab1").css("background-color", "#335167");
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab3_content").hide();
    });
  }, []);

  return (
    <div class="tab_div">
      <div class="tabs_menu">
        <ul class="tabs">
          <li id="tab1"> Tab 1 </li>
          <li id="tab2"> Tab 2 </li>
          <li id="tab3"> Tab 3 </li>
          <li id="tab4"> Tab 4 </li>
        </ul>
      </div>

      <div class="tab_content">
        <div id="tab1_content">
          <p> Tab 1 Content </p>
        </div>

        <div id="tab2_content">
          <p> Tab 2 Content </p>
        </div>

        <div id="tab3_content">
          <p> Tab 3 Content </p>
        </div>

        <div id="tab4_content">
          <p> Tab 4 Content </p>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
