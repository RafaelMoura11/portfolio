import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const page = useNavigate();

  const changePage = ({ target: { name } }) => page(`/${name}`)

  return (
    <nav id="header">
      <button type="button" className="btn btn-secondary nav-button" name="" onClick={ changePage }>Home</button>
      <button type="button" className="btn btn-secondary nav-button" name="about" onClick={ changePage }>About</button>
      <button type="button" className="btn btn-secondary nav-button" name="skills" onClick={ changePage }>Skills</button>
      <button type="button" className="btn btn-secondary nav-button" name="projects" onClick={ changePage }>Projects</button>
    </nav>
  )
}