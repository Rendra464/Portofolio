import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import './styles/Loading.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="footprint-container">
                    <div className="footprint"></div>
                    <div className="footprint"></div>
                    <div className="footprint"></div>
                    <div className="footprint"></div>
                </div>
                <h2 className="loading-text">Loading, please wait...</h2>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
