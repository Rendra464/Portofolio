import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section
            className="about"
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>About Me</h2>
            <p>
                            I am a Computer Science graduate from Bina Nusantara University with a passion for web development. Skilled in WordPress, .NET, C#, JavaScript, and PHP, I focus on creating responsive and user-friendly websites.

                My experience includes managing website content, customizing themes, integrating plugins, and collaborating with designers to deliver functional and visually appealing solutions. I thrive in both independent work and team environments, ensuring projects are completed efficiently and effectively.

                I am eager to contribute my skills to impactful web or application development projects and am open to opportunities in tech companies, startups, or freelance work.
            </p>
        </motion.section>
    );
};

export default About;
