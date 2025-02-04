import React from 'react';  
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
