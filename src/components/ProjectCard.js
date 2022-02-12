import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="card">
      <img className="card-img-top" src={ project.image } alt={ project.name } />
      <div className="card-body">
        <h5 className="card-title">{ project.name }</h5>
        <p className="card-text">{ project.description }</p>
      </div>
      <div className="project-card-button">
        <a href={ project.github } className="btn btn-primary">GitHub</a>
        <a href={ project.deploy } className="btn btn-primary">Site</a>
      </div>
    </div>
  )
}