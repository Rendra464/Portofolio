import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-box">
                <h3>Contact</h3>
                <div className="contact-icons">
                    <a href="mailto:renadikara@gmail.com" target="_blank" rel="noopener noreferrer" style={}>
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
