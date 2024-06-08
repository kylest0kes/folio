import React, { useState } from 'react';
import './Projects.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import PROJECTS from "../../Assets/projects/projects";

const Projects = () => {
  const [filter, setFilter] = useState('');

  const handleSetFilter = (language) => {
    setFilter(language);
  }

  const filterProjects = filter ? PROJECTS.filter(project => project.language === filter) : PROJECTS;

  return (
    <div id='projects-section'>
        <p className="projects-header">3. Projects...</p>
        <div className='projects-subsection'>
          <div className='project-cards-filter'>
            <button onClick={() => handleSetFilter('')} className='filter-options'>All</button>
            <button onClick={() => handleSetFilter('Javascript')} className='filter-options'>Javascript</button>
            <button onClick={() => handleSetFilter('React')} className='filter-options'>React</button>
            <button onClick={() => handleSetFilter('Python')} className='filter-options'>Python</button>
          </div>
          <div className='project-cards'>
            {filterProjects.map((project) => {
              return (
                <ProjectCard className='project-card'
                  key={project.id}
                  title={project.projectTitle}
                  desc={project.projectDesc}
                  language={project.language}
                  link={project.link}
                  img={project.projectImg}
                  gh={project.ghURL}
                />                         
              );
            })}
          </div>
        </div>
    </div>
  )
}

export default Projects;