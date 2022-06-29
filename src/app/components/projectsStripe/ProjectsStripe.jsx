import React from 'react';
import Project from '../project/Project';
import ProjectSpecs from '../projectSpecs/ProjectSpecs';
import './styles/styles.css';

const ProjectsStripe = () => {
  return (
    <div className="projects-stripe-container">
        <ProjectSpecs/>
        <Project/>
    </div>
  )
}

export default ProjectsStripe