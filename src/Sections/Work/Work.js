import React from "react";

import "./Work.css";

const Work = () => {
  return (
    <div className="work-container">
      <p className="work-header">2. Work...</p>
      <div className="tab-area">
        <div className="tab-section">
          <label for="tab-1" className="tab-header">
            Capco
          </label>
          <input type="radio" name="header-tab" id="tab-1" />
          <div className="tab-content">
            Mar 2021 - Present
            <br />
            <br />
            Resposible for...
          </div>
        </div>

        <div className="tab-section">
          <label for="tab-2" className="tab-header">
            Captel Inc.
          </label>
          <input type="radio" name="header-tab" id="tab-2" />
          <div className="tab-content">
            Mar 2020 - Mar 2021
            <br />
            <br />
            Primarily focused on listening to customer phone conversations in
            real time and quickly and promptly providing captions for these
            calls, allowing the users ease of use, and the ability to have
            meaningful conversations with the addition of seamless captions.
          </div>
        </div>

        <div className="tab-section">
          <label for="tab-3" className="tab-header">
            Holler Classic Automotive
          </label>
          <input type="radio" name="header-tab" id="tab-3" />
          <div className="tab-content">
            Nov 2016 - Mar 2020
            <br />
            <br />
            Responsible for receiving multiple call in relation to a variety of
            situations including, but not limited to, service scheduling,
            directing inbound calls to proper recipients, and other general
            assistance.
          </div>
        </div>

        <div className="tab-section">
          <label for="tab-4" className="tab-header">
            Volcom
          </label>
          <input type="radio" name="header-tab" id="tab-4" />
          <div className="tab-content">
            Jan 2015 - Nov 2016
            <br />
            <br />
            Supervised the sales team, ensuring daily goals were met, executed
            daily tasks, and recruited and interviewed new talent. Was head of a
            team for a off-site warehouse in charge of keeping sales floor
            stocked at all times and keeping excess product organized and easily
            accessible.
          </div>
        </div>
        <div className="tab-section">
          <label for="tab-5" className="tab-header">
            Pacsun
          </label>
          <input type="radio" name="header-tab" id="tab-5" />
          <div className="tab-content">
            Nov 2012 - Jan 2015
            <br />
            <br />
            Was in charge of meeting personal, and store sales goals, making
            strategic decisions to increase sales and productivity, and working
            with a sales team to guarantee all customers were assisted in a
            friendly and informative manner. Partnered with a small group to
            keep an organized warehouse, with new and existing product displayed
            in a clean and accessible manner.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
