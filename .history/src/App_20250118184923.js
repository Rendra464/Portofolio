import React, { useState, useEffect } from 'react';  
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';

import React, { useEffect, useState } from "react";

function createParticles(containerId, count = 50) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.setProperty("--i", i);
        container.appendChild(particle);
    }
}


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Timer untuk menghilangkan loading setelah 2 detik
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Bersihkan timer
        return () => clearTimeout(timer);
    }, []);

    // Tambahkan partikel ketika loading
    useEffect(() => {
        if (loading) {
            createParticles("particleCanvas-Blue", 50); // 50 partikel biru
            createParticles("particleCanvas-White", 50); // 50 partikel putih
        }
    }, [loading]);

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
