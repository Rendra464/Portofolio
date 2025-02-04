import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <motion.nav
            className="header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="logo">Rendra Adikara</div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </motion.nav>
    );
};

export default Header;
