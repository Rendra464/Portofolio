import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Spotify Profile',
        description:
            'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
        image: 'spotify-profile.png',
        stars: 670,
        tags: ['React', 'Express', 'Spotify API', 'Heroku'],
        link: 'https://example.com',
    },
    {
        title: 'E-commerce App',
        description:
            'An online store built with React and Node.js, offering a seamless shopping experience with secure payment integration and responsive design.',
        image: 'ecommerce-app.png', 
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: 'https://example.com',
    },
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
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.title} ↗
                                </a>
                            </h3>
                            <p>{project.description}</p>
                            <div className="project-meta">
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
