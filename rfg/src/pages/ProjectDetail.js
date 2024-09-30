import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams();

    const allProjects = [
        { id: 1, title: 'Hotel Moderno', description: 'Descripción del Hotel Moderno.', image: '/img/proyecto1.png' },
        { id: 2, title: 'Resort Playa', description: 'Descripción del Resort Playa.', image: '/img/proyecto2.png' },
        { id: 3, title: 'Hostal Urbano', description: 'Descripción del Hostal Urbano.', image: '/img/proyecto3.png' },
        // Agrega más proyectos aquí
    ];

    // Encontrar el proyecto por ID
    const project = allProjects.find(p => p.id === parseInt(id));

    if (!project) {
        return <h2>Proyecto no encontrado</h2>;
    }

    return (
        <div>
            <section className="banner">
                <h1>{project.title}</h1>
            </section>
            <section className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={project.image} alt={project.title} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>Descripción del Proyecto</h2>
                        <p>{project.description}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
