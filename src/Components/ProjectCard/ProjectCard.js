import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div class="card-container">
    <div class="project-card">
      <div class="card-project-preview">
      </div>
      <div class ="card-project-content">
        <h4 class="card-project-title">Project Title</h4>
        <p class="card-project-description">Lorem ipsum dolor sit amet, consetetur sadips
        elitr, sed diam nonumy eirmod.</p>
        <button class="project-btn">View case</button>
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;
