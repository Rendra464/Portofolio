import React from 'react';
import '../styles/Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.div
            className="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div>
                
            </div>
        </motion.div>
    );
};


export default Hero;
    