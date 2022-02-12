import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import MY_DATA from '../my_data';
import ProjectCard from './ProjectCard';

export default function ProjectContainer() {
  const { language } = useContext(MyContext);
  return (
    <div id="main-content-project">
      { MY_DATA[language].projects.map((project) => <ProjectCard project={ project } />) }    
    </div>
  )
}