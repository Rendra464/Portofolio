import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaGitAlt, FaDatabase, FaCogs } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';

const Skills = () => {
    const skills = [
        {
            category: 'Front-End',
            items: [
                { name: 'HTML', icon: <FaHtml5 /> },
                { name: 'CSS', icon: <FaCss3Alt /> },
                { name: 'JavaScript', icon: <FaJs /> },
            ],
        },
        {
            category: 'Back-End',
            items: [
                { name: '.NET Framework', icon: <SiDotnet /> },
            ],
        },
        {
            category: 'Database',
            items: [
                { name: 'SQL Server', icon: <FaDatabase /> },
            ],
        },
        {
            category: 'Content Management',
            items: [
                { name: 'WordPress', icon: <FaWordpress /> },
            ],
        },
        {
            category: 'Tools',
            items: [
                { name: 'Git', icon: <FaGitAlt /> },
                { name: 'Agile Methodologies', icon: <FaCogs /> },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5 },
        }),
    };

    return (
        <section className="skills">
            <h2>Key Skills</h2>
            <div className="skills-list">
                {skills.map((skillCategory, index) => (
                    <motion.div
                        key={index}
                        className="skill-category"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        custom={index}
                    >
                        <h3>{skillCategory.category}</h3>
                        <ul>
                            {skillCategory.items.map((skill, idx) => (
                                <li key={idx} className="skill-item">
                                    {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
