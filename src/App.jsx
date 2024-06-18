import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skillstack from './components/Skillstack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skillstack/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
