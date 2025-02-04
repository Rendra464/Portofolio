import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaGitAlt, FaDatabase, FaCogs } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";

const Skills = () => {
    const skills = [
        { category: "Front-End", items: [{ name: "HTML", icon: <FaHtml5 /> }, { name: "CSS", icon: <FaCss3Alt /> }, { name: "JavaScript", icon: <FaJs /> }] },
        { category: "Back-End", items: [{ name: ".NET Framework", icon: <SiDotnet /> }] },
        { category: "Database", items: [{ name: "SQL Server", icon: <FaDatabase /> }] },
        { category: "Content Management", items: [{ name: "WordPress", icon: <FaWordpress /> }] },
        { category: "Tools", items: [{ name: "Git", icon: <FaGitAlt /> }, { name: "Agile Methodologies", icon: <FaCogs /> }] },
    ];

    return (
        <section className="skills">
            <h2>Key Skills</h2>
            <div className="skills-list">
                {skills.map((skillCategory, index) => (
                    <motion.div
                        key={index}
                        className="skill-card"
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ rotateX: 0, rotateY: 0 }}
                        onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const { left, top, width, height } = card.getBoundingClientRect();
                            const x = (e.clientX - left - width / 2) / 10;
                            const y = -(e.clientY - top - height / 2) / 10;
                            card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
                        }}
                    >
                        <h3>{skillCategory.category}</h3>
                        <ul>
                            {skillCategory.items.map((skill, idx) => (
                                <li key={idx} className="skill-item">
                                    <span className="skill-icon">{skill.icon}</span>
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
