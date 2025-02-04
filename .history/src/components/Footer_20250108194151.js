import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <svg class="svg-curve" viewBox="0 0 1000 79" xmlns="http://www.w3.org/2000/svg">
                <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
            </svg>
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
