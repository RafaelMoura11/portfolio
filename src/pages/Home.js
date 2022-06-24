import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home (){
  return (
    <div id="home">
      <Header />
      <main id="main-content-home">
        <h1 className="animate__animated animate__bounceInDown">Rafael Moura</h1>
        <h3 className="animate__animated animate__bounceInDown">Desenvolvedor Web FullStack</h3>
        <h5 className="animate__animated animate__bounceInDown">Estou aqui para aprender</h5>
      </main>
      <Footer />
    </div>
  )
}