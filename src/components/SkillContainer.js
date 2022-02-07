import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import MY_DATA from '../my_data';
import SkillCard from './SkillCard';

export default function SkillContainer() {
  const { language } = useContext(MyContext);
  return (
    <div id="main-content-skills">
      { MY_DATA[language].skills.map((skill) => <SkillCard skill={ skill } />) }    
    </div>
  )
}