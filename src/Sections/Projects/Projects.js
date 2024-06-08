import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import PROJECTS from "../../Assets/projects/projects";

const Projects = () => {
  const [filter, setFilter] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS)

  const handleSetFilter = (language) => {
    setFilter(language);
    const newFilteredProjects = language ? PROJECTS.filter(project => project.language === language) : PROJECTS;

    setFilteredProjects(newFilteredProjects);
  }

  useEffect(() => {
    // Add the fade-in class to project cards after filter change
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.classList.remove('fade-in');
      // Trigger reflow to restart the animation
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
            <p onClick={() => handleSetFilter('Javascript')} className={filter === 'Javascript' ? 'filter-option active' : 'filter-option'}>Javascript</p>
            <p onClick={() => handleSetFilter('React')} className={filter === 'React' ? 'filter-option active' : 'filter-option'}>React</p>
            <p onClick={() => handleSetFilter('Python')} className={filter === 'Python' ? 'filter-option active' : 'filter-option'}>Python</p>
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