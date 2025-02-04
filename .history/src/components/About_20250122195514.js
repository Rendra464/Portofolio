import React from 'react';
import "../styles/About.css";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <div className="about-left">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-description">
                        I am a Computer Science graduate from Bina Nusantara University with a passion for web development.
                        Skilled in JavaScript, WordPress, .NET, C#, JavaScript, and PHP, I focus on creating responsive and user-friendly websites.
                        My experience includes managing website content, customizing themes, integrating plugins, and collaborating with
                        designers to deliver functional and visually appealing solutions.
                    </p>
                    <p className="about-description">
                        I thrive in both independent work and team environments, ensuring projects are completed efficiently and effectively.
                        I am eager to contribute my skills to impactful web or application development projects and am open to opportunities
                        in tech companies, startups, or freelance work.
                    </p>
                </div>

                <div className="about-right">
                    <h2 className="experience-title">Experience</h2>
                    <ul className="experience-list">
                        <li className="experience-card">
                            <div className="experience-icon">💼</div>
                            <div className="experience-details">
                                <h3>Asuransi Astra Buana</h3>
                                <p className="experience-duration">Application Developer | 2023 - 2024</p>
                                <p className="experience-description">
                                    Contributed to the development and maintenance of internal web applications for efficient insurance claim processing. Implemented front-end and back-end solutions using modern frameworks.
                                </p>
                            </div>
                        </li>
                        <li className="experience-card">
                            <div className="experience-icon">☕</div>
                            <div className="experience-details">
                                <h3>Cafe Web Project</h3>
                                <p className="experience-duration">Freelance | 2024</p>
                                <p className="experience-description">
                                    Designed and developed a user-friendly cafe website, including an interactive menu and online booking features.
                                </p>
                            </div>
                        </li>
                        <li className="experience-card">
                            <div className="experience-icon">✈️</div>
                            <div className="experience-details">
                                <h3>Travel Website</h3>
                                <p className="experience-duration">Freelance | 2021</p>
                                <p className="experience-description">
                                    Build a responsive travel website with integrated APIs for real-time ticket booking and map navigation.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
