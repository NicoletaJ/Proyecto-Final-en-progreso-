import React from 'react';
import ProjectItem from '../components/ProjectItem';

const Projects = () => {
    const projects = [
        { title: 'Hotel Moderno', image: '/img/proyecto1.png' },
        { title: 'Oficina Central', image: '/img/proyecto2.png' },
        { title: 'Vivienda Familiar', image: '/img/proyecto3.png' },
    ];

    return (
        <div>
            <section className="banner">
                <h1>Proyectos</h1>
            </section>
            <section className="container my-5">
                <h2>Filtrar Proyectos</h2>
                <div className="filters">
                    <button>Todo</button>
                    <button>Hoteleros</button>
                    <button>Oficinas</button>
                    <button>Viviendas</button>
                </div>
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-md-4" key={index}>
                            <ProjectItem title={project.title} image={project.image} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
