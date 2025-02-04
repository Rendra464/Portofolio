import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="about"
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <motion.h2
                className="about-title"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                About Me
            </motion.h2>
            <motion.p
                className="about-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                I am a Computer Science graduate from Bina Nusantara University with a passion for web development. 
                Skilled in WordPress, .NET, C#, JavaScript, and PHP, I focus on creating responsive and user-friendly websites. 
                My experience includes managing website content, customizing themes, integrating plugins, and collaborating with 
                designers to deliver functional and visually appealing solutions.
            </motion.p>
            <motion.p
                className="about-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                I thrive in both independent work and team environments, ensuring projects are completed efficiently and effectively. 
                I am eager to contribute my skills to impactful web or application development projects and am open to opportunities 
                in tech companies, startups, or freelance work.
            </motion.p>
        </motion.section>
    );
};

export default About;
