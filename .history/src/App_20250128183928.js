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
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loader"></div>
                <h2 className="loading-text">Loading<span className="dots">...</span></h2>
            </div>
        );
    }

    import React, { useEffect, useState } from "react";
import "../styles/CustomCursor.css";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return <div className="custom-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default CustomCursor;


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
