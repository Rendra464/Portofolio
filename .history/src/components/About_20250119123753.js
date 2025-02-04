import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="about advanced-about"
            id="about"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <motion.div
                className="about-content"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 60 }}
            >
                <h2 className="about-title">About Me</h2>
                <p className="about-description">
                    I'm a passionate web developer with a background in Computer Science from Bina Nusantara University. I specialize in creating dynamic, interactive, and user-friendly websites using modern frameworks like WordPress, .NET, C#, JavaScript, and PHP.
                </p>
                <p className="about-description">
                    My expertise lies in transforming ideas into polished digital solutions, with experience in theme customization, plugin integration, and collaborative design. Whether working independently or in a team, I bring efficiency and creativity to every project I undertake.
                </p>
                <motion.button
                    className="about-button"
                    whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
                    whileTap={{ scale: 0.9 }}
                >
                    Contact Me
                </motion.button>
            </motion.div>
            <motion.div
                className="about-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
            >
                <img
                    src="https://via.placeholder.com/400"
                    alt="About me illustration"
                    className="image-glow"
                />
            </motion.div>
        </motion.section>
    );
};

export default About;
