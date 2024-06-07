import React from 'react';
import './Projects.css';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <div id='projects-section'>
        <p className="projects-header">3. Projects...</p>
        <div className='project-cards-filter'>

        </div>
        <div className='project-cards'>
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
          <ProjectCard className='project-card'/>          
        </div>
    </div>
  )
}

export default Projects;