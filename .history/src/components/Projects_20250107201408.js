import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
    { title: 'E-commerce App', description: 'An online store built with React and Node.js' },
    { title: 'Portfolio Website', description: 'A responsive personal portfolio' },
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
