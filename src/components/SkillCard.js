import React from 'react';

export default function SkillCard({ skill }) {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img className="card-img-top" id="card-img" src={ skill.image } alt={ skill.tech } />
      <div className="card-body">
        <h5 className="card-title">{ skill.tech }</h5>
        <p className="card-text">{ skill.description }</p>
      </div>
    </div>
  )
}