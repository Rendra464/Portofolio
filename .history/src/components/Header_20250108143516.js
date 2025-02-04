import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';

const Header = ({ toggleTheme, theme }) => {
    return (
        <header>
            <h1>My Portfolio</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </header>
    );
};

export default Header;
