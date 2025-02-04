import React, { useState, useEffect } from 'react';  
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer); 
    }, []);

    return (
        <>
            {loading ? (
                <div className="loader-wrapper">
                    <div className="e-loadholder">
                        <div className="m-loader">
                            <span className="e-text">Loading</span>
                        </div>
                    </div>
                    <div id="particleCanvas-Blue"></div>
                    <div id="particleCanvas-White"></div>
                </div>
            ) : (
                <div className="main-content fade-in">
                    <Header />
                    <Hero />
                    <About />
                    <Education />
                    <Skills />
                    <Projects />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
