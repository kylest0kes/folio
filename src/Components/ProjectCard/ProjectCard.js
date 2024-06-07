import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div class="card-container">
    <div class="project-card">
      <div class="card-project-preview">
      </div>
      <div class ="card-project-content">
        <h4 class="card-project-title">{props.title}</h4>
        <p class="card-project-description">{props.desc}</p>
        <button class="project-btn">View {props.title}</button>
        <div className="lang-icons">
          {props.language}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;
