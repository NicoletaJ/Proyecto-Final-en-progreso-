import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectItem.css'; 
import BannerInferior from './BannerInferior';

const ProjectItem = ({ title, subtitle, className, link }) => {
    return (
        <Link to={link} className={`project-item ${className}`}>
            <div className="project-content">
                <div className="project-overlay">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
            
        </Link>
        
    );
};

export default ProjectItem;
