import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img id="card-img" src={ project.image } alt={ project.name } />

      <div className="card-body">
        <h5 className="card-title">{ project.name }</h5>
        <p className="card-text">{ project.description }</p>
      </div>

      <div className="project-card-button">
        <a href={ project.github } className="btn btn-primary" target="_blank" rel="noreferrer">GitHub</a>
        { project.deploy && <a href={ project.deploy } className="btn btn-primary" target="_blank" rel="noreferrer">Site</a> }
      </div>
    </div>
  )
}