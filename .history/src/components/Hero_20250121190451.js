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
            <h1 className="tittle">R.M. Rendra Adikara</h1>
            <p className="subtittle">Application Developer | Front-End & Back-End Enthusiast</p>
        </motion.div>
    );
};


export default Hero;
    