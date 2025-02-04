import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 dunks1980.com</p>
                <div className="social-icons">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-briefcase"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
