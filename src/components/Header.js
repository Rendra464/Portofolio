import React from 'react';
import '../styles/Header.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
    return (
        <nav className="header">
            <div className="contact-icons">
                <a href="mailto:renadikara@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="icon" />
                </a>
                <a href="http://linkedin.com/in/rendraadikara/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/rendra464" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
            </div>
        </nav>
    );
};

export default Header;