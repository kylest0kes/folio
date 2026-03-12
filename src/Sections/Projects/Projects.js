import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import PROJECTS from "../../Assets/projects/projects";

const Projects = () => {
  const [filter, setFilter] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS)

  const handleSetFilter = (language) => {
    setFilter(language);
    const newFilteredProjects = language ? PROJECTS.filter(project => {
      if (Array.isArray(project.language)) {
        return project.language.includes(language);
      } else {
        return project.language === language;
      }
    }) : PROJECTS;
    setFilteredProjects(newFilteredProjects);
  }

  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.classList.remove('fade-in');
      void card.offsetWidth;
      card.classList.add('fade-in');
    });
  }, [filteredProjects]);

  return (
    <div id='projects-section'>
        <p className="projects-header">3. Projects...</p>
        <div className='projects-subsection'>
          <div className='project-cards-filter'>
            <p onClick={() => handleSetFilter('')} className={filter === '' ? 'filter-option active' : 'filter-option'}>All</p>
            <p onClick={() => handleSetFilter('Angular')} className={filter === 'Angular' ? 'filter-option active' : 'filter-option'}>Angular</p>
            <p onClick={() => handleSetFilter('Java')} className={filter === 'Java' ? 'filter-option active' : 'filter-option'}>Java</p>
            <p onClick={() => handleSetFilter('Javascript')} className={filter === 'Javascript' ? 'filter-option active' : 'filter-option'}>Javascript</p>
            <p onClick={() => handleSetFilter('Node')} className={filter === 'Node' ? 'filter-option active' : 'filter-option'}>Node</p>
            <p onClick={() => handleSetFilter('Python')} className={filter === 'Python' ? 'filter-option active' : 'filter-option'}>Python</p>
            <p onClick={() => handleSetFilter('React')} className={filter === 'React' ? 'filter-option active' : 'filter-option'}>React</p>
          </div>
          <div className='project-cards'>
            {filteredProjects.map((project) => {
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