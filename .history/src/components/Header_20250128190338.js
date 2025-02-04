import React from 'react';
import '../styles/Header.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
    return (
        <nav className="header">
            <a href='/' className="logo">Rendra Adikara</a>
            <div className="contact-icons">
                <a href="mailto:renadikara@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="icon" />
                </a>
                <a href="http://linkedin.com/in/rendra-adikara/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
            </div>
        </nav>
    );
};

export default Header;