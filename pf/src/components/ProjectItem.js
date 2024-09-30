import React from 'react';
import './ProjectItem.css'; // Asegúrate de crear e importar el archivo CSS correspondiente

const ProjectItem = ({ title, subtitle, className }) => {
    return (
        <div className={`project-item ${className}`}>
            <a href="#" className="project-link">
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </a>
        </div>
    );
};

export default ProjectItem;
