import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition duration-300">
                Rendra Adikara
            </a>

            {/* Contact Icons */}
            <div className="flex space-x-4">
                <a href="mailto:renadikara@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition transform hover:scale-110">
                    <FaEnvelope size={24} />
                </a>
                <a href="http://linkedin.com/in/rendra-adikara/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition transform hover:scale-110">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition transform hover:scale-110">
                    <FaGithub size={24} />
                </a>
            </div>
        </nav>
    );
};

export default Header;
