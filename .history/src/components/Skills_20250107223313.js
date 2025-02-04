import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaGitAlt, FaDatabase } from 'react-icons/fa';
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
                { name: 'Agile Methodologies', icon:  },
            ],
        },
    ];

    return (
        <section className="skills">
            <h2>Key Skills</h2>
            <div className="skills-list">
                {skills.map((skillCategory, index) => (
                    <div key={index} className="skill-category">
                        <h3>{skillCategory.category}</h3>
                        <ul>
                            {skillCategory.items.map((skill, idx) => (
                                <li key={idx} className="skill-item">
                                    {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
