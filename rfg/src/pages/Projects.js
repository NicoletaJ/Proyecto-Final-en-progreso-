import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectItem from '../components/ProjectItem';


const Projects = () => {
    const allProjects = [
        { id: 1, title: 'Vivienda Moderna', category: 'Viviendas' },
        { id: 2, title: 'Edificio Viena', category: 'Edificaciones' },
        { id: 3, title: 'Vivienda Rústica', category: 'Viviendas' },
        { id: 4, title: 'Hotel Moderno', category: 'Hoteleros' },
        { id: 5, title: 'Resort Playa', category: 'Hoteleros' },
        { id: 6, title: 'Hostal Urbano', category: 'Hoteleros' },
        { id: 7, title: 'Oficina Central', category: 'Oficinas' },
        { id: 8, title: 'Espacio Corporativo', category: 'Oficinas' },
        { id: 9, title: 'Oficina Moderna', category: 'Oficinas' },
        { id: 10, title: 'Edificio Empresarial', category: 'Edificaciones' },
        { id: 11, title: 'Torre de Negocios', category: 'Edificaciones' },
        { id: 12, title: 'Complejo Empresarial', category: 'Edificaciones' },
        { id: 13, title: 'Vivienda Familiar', category: 'Viviendas' },
        { id: 14, title: 'Casa de Campo', category: 'Viviendas' },
        { id: 15, title: 'Dúplex Urbano', category: 'Viviendas' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('Todo');
    const navigate = useNavigate();

    const filteredProjects = selectedCategory === 'Todo'
        ? allProjects
        : allProjects.filter(project => project.category === selectedCategory);

    const handleProjectClick = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <div>
            <section className="banner">
                <h1>Proyectos</h1>
            </section>
            <section className="container my-5">
                <h2>Filtrar Proyectos</h2>
                <div className="filters">
                    <button onClick={() => setSelectedCategory('Todo')}>Todo</button>
                    <button onClick={() => setSelectedCategory('Hoteleros')}>Hoteleros</button>
                    <button onClick={() => setSelectedCategory('Oficinas')}>Oficinas</button>
                    <button onClick={() => setSelectedCategory('Edificaciones')}>Edificaciones</button>
                    <button onClick={() => setSelectedCategory('Viviendas')}>Viviendas</button>
                </div>
                <div className="row mt-4">
                    {filteredProjects.map((project) => (
                        <div className="col-md-4 mb-4" key={project.id}>
                            <div onClick={() => handleProjectClick(project.id)}>
                                <ProjectItem
                                    title={project.title}
                                    subtitle={`Proyecto ${project.title}`}
                                    className={project.category.toLowerCase().replace(/\s+/g, '-')} // Asignar clase según la categoría
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
