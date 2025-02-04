import React from 'react';
import './styles/Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="hero">
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                Hi, I'm a <span>Professional Developer</span>
            </motion.h1>
            <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                I build beautiful web applications and solve real-world problems.
            </motion.p>
        </div>
    );
};

export default Hero;
