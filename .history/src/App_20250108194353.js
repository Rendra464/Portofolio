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
            <Contact />
            <svg class="svg-curve" viewBox="0 0 1364 79" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
            </svg>
            <Footer />
        </div>
    );
}

export default App;
