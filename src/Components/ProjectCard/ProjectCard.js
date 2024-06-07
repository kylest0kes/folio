import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faJs } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = (props) => {

  const openLink = () => {
    window.open(props.link, '_blank')
  }
  
  const openGH = () => {
    window.open(props.gh, '_blank')
  }

  return (
    <div class="card-container" onClick={openGH}>
      <div class="project-card">
        <div class="card-project-preview">
          <img src={props.img} alt={props.title} className="project-img" />
        </div>
        <div class ="card-project-content">
          <h4 class="card-project-title">{props.title}</h4>
          <p class="card-project-description">{props.desc}</p>
          <div className="bottom-content">
            <button class="project-btn" onClick={openLink}>View {props.title}
            </button>
            <div className="lang-icons">
              {props.language === 'Javascript' && <FontAwesomeIcon icon={faJs} />}
              {props.language === 'React' && <FontAwesomeIcon icon={faReact} />}
              {props.language === 'Python' && <FontAwesomeIcon icon={faPython} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
