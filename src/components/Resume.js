import React from 'react';
import '../styles/Resume.css';

function Resume() {
    return (
        <div className="resume-container">
            <h2>Resume</h2>
            <div className="skills-section">
                <h3>Front-End Development:</h3>
                <ul>
                    <li>HTML, CSS, and JavaScript</li>
                    <li>Front-end frameworks (React, Angular, Vue.js)</li>
                    <li>Responsive design principles</li>
                    <li>Basic graphic design (Photoshop or Sketch)</li>
                    <li>Version control (Git)</li>
                </ul>
            </div>
            <div className="skills-section">
                <h3>Back-End Development:</h3>
                <ul>
                    <li>Server-side languages (PHP, Ruby, Java, Python)</li>
                    <li>Database technologies (MySQL, MongoDB)</li>
                    <li>API design and development</li>
                    <li>Security best practices</li>
                    <li>Cloud services (AWS, Azure)</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;
