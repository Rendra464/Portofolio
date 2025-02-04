export default Footer;
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <h3>Contact</h3>
                <div className="footer-icons">
                    <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="icon" />
                    </a>
                    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 MyPortfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
