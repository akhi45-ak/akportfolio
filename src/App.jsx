import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Academics from './Components/Acadamics';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Navlinks/Navbar';


function App() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Academics />
      <Contact />
      <Footer />
      <Navbar />
    </div>
  );
}

export default App;
