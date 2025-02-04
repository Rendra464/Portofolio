import React from 'react';
import '../styles/Header.css';

const Header = () => {

    return (
        <motion.nav
            className="header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="logo">Rendra Adikara</div>
            <ul className="nav-links">
                <li><button onClick={() => scrollToSection('#about')}>About</button></li>
                <li><button onClick={() => scrollToSection('#projects')}>Projects</button></li>
            </ul>
        </motion.nav>
    );
};

export default Header;
