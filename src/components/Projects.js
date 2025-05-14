import React from 'react';
import '../styles/Projects.css';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Kampung Mahasiswa Malang CoffeShop',
        description:
            'Kampung Mahasiswa Malang CoffeeShop is a web platform for students and coffee lovers to explore menus, place orders, and stay updated on cafe events.',
        image: './KMM.png', 
        tags: ['Laravel', 'Javascript', 'Tailwind CSS', 'HTML', 'Postgresql'],
        link: '',
    },
    {
        title: 'Trowulan Travel',
        description:
            'Trowulan Travel" is a modern and user-friendly travel platform designed to simplify trip planning and booking experiences.',
        image: './Trowulan.png', 
        tags: ['React', 'HTML & CSS' ,'SQL Server', 'C#', '.net'],
        link: '',
    },
    {
        title: 'Course Landing Page',
        description:
            'A modern and responsive course landing page designed to showcase online classes, ebooks, or tutorials. Built with clean HTML, CSS, JavaScript, and styled using Tailwind CSS for fast and easy customization.',
        image: './landingpage.png', 
        tags: ['HTML & CSS' , 'Javascript' , 'Tailwind CSS'],
        link: '',
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
                                <a href={project.link}>
                                    {project.title}
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
