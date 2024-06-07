import React from 'react';
import './Projects.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import PROJECTS from "../../Assets/projects/projects";

const Projects = () => {
  return (
    <div id='projects-section'>
        <p className="projects-header">3. Projects...</p>
        <div className='projects-subsection'>
          <div className='project-cards-filter'>

          </div>
          <div className='project-cards'>
            {PROJECTS.map((project) => {
              return (
                <ProjectCard className='project-card'
                  key={project.id}
                  title={project.projectTitle}
                  desc={project.projectDesc}
                  language={project.language}
                  link={project.link}
                />                         
              );
            })}
          </div>
        </div>
    </div>
  )
}

export default Projects;