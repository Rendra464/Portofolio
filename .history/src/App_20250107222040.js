import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';


function App() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Education />
            <Skill />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
