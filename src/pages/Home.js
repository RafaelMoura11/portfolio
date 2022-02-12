import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home (){
  return (
    <div id="home">
      <Header />
      <main id="main-content-home">
        <h1>Rafael Moura</h1>
        <h3>Front-End Developer</h3>
        <h5>Estou aqui para aprender</h5>
      </main>
      <Footer />
    </div>
  )
}