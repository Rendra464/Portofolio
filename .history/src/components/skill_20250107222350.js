import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaGitAlt } from 'react-icons/fa';
import { SiDotnet, SiMicrosoftsqlserver, SiVisualstudio } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { category: 'Front-End', items: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'], icon: <FaHtml5 /> },
        { category: 'Back-End', items: ['C#', '.NET Framework', 'API Development'], icon: <SiDotnet /> },
        { category: 'Database', items: ['SQL Server', 'SSMS', 'Optimization', 'SSRS'], icon: <SiMicrosoftsqlserver /> },
        { category: 'Content Management', items: ['WordPress'], icon: <FaWordpress /> },
        { category: 'Tools', items: ['Git', 'Visual Studio', 'Agile Methodologies'], icon: <FaGitAlt /> }
    ];

    return (
        <section className="skills">
            <h2 className="skills-heading">Key Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="category-title">
                            {skill.icon} {skill.category}
                        </h3>
                        <ul className="skills-list">
                            {skill.items.map((item, i) => (
                                <li key={i} className="skill-item">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;
