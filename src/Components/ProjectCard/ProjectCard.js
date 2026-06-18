import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faJs, faAngular, faJava, faNode, faTypescript } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = (props) => {

  const openLink = () => {
    window.open(props.link, '_blank')
  }
  
  const openGH = () => {
    window.open(props.gh, '_blank')
  }

  return (
    <div className="card-container" onClick={openGH}>
      <div className="project-card">
        <div className="card-project-preview">
          <img src={props.img} alt={props.title} className="project-img" />
        </div>
        <div className ="card-project-content">
          <h4 className="card-project-title">{props.title}</h4>
          <p className="card-project-description">{props.desc}</p>
          <div className="bottom-content">
            <button className="project-btn" onClick={openLink}>View {props.title}
            </button>
            <div className="lang-icons">
              {Array.isArray(props.language) ? (
                props.language.map(lang => {
                  switch (lang) {
                    case 'Javascript':
                      return <FontAwesomeIcon key={lang} icon={faJs} className="lang-icon" />;
                    case 'React':
                      return <FontAwesomeIcon key={lang} icon={faReact} className="lang-icon"/>;
                    case 'Python':
                      return <FontAwesomeIcon key={lang} icon={faPython} className="lang-icon"/>;
                    case 'Angular':
                      return <FontAwesomeIcon key={lang} icon={faAngular} className="lang-icon"/>;
                    case 'Java':
                      return <FontAwesomeIcon key={lang} icon={faJava} className="lang-icon"/>;
                    case 'Node':
                      return <FontAwesomeIcon key={lang} icon={faNode} className="lang-icon"/>
                    default:
                      return null; 
                  }
                })
              ) : (
                <>
                  {props.language === 'Javascript' && <FontAwesomeIcon icon={faJs} className="lang-icon"/>}
                  {props.language === 'React' && <FontAwesomeIcon icon={faReact} className="lang-icon"/>}
                  {props.language === 'Python' && <FontAwesomeIcon icon={faPython} className="lang-icon"/>}
                  {props.language === 'Angular' && <FontAwesomeIcon icon={faAngular} className="lang-icon"/>}
                  {props.language === 'Java' && <FontAwesomeIcon icon={faJava} className="lang-icon"/>}
                  {props.language === 'Typescript' && <FontAwesomeIcon icon={faTypescript} className="lang-icon"/>}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
