import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/skills" element={ <Skills /> } />
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
    </Provider>
  );
}

export default App;
