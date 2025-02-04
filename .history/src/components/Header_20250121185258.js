import React from 'react';
import '../styles/Header.css';
import { motion } from 'framer-motion';

const Header = () => {
    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
            <div className="logo">Rendra Adikara</div>
            <ul className="nav-links">
                <li><button onClick={() => scrollToSection('#about')}>About</button></li>
                <li><button onClick={() => scrollToSection('#projects')}>Projects</button></li>
            </ul>
        
    );
};

export default Header;
