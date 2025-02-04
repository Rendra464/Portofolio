import React from 'react';
import '.styles/About.css';
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
                I'm a passionate developer with experience in React.js, Node.js, and building scalable applications.
            </p>
        </motion.section>
    );
};

export default About;
