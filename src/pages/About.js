import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../context/MyContext';
import MY_DATA from '../my_data';
import Eu from '../images/Eu.jpeg'

export default function About (){
  const { language } = useContext(MyContext);
  // console.log(language)
  return (
    <>
      <Header />
      <div id="main-content-about">
        <img src={ Eu } alt="eu" id="eu" />
        <div id="about-text">
          <p>{ MY_DATA[language].about.intro }</p>
          <br />
          <p>{ MY_DATA[language].about.goals }</p>
          <br />
          <p>{ MY_DATA[language].about.formation }</p>
        </div>
      </div>
      <Footer />
    </>
  )
};