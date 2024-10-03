import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    const allProjects = [
        { id: 1, title: 'Vivienda Moderna', category: 'Viviendas', img: '/img/proyecto-moderno.png' },
        { id: 2, title: 'Edificio Viena', category: 'Edificaciones', img: '/img/edificio-viena.png' },
        { id: 3, title: 'Vivienda Rústica', category: 'Viviendas', img: '/img/vivienda-rustica.png' },
        { id: 4, title: 'Hotel Boutique en la Montaña', category: 'Hoteleros', img: '/img/hotel-boutique7.png' },
        { id: 5, title: 'Resort Costa Blanca', category: 'Hoteleros', img: '/img/resort-costablanca6.png' },
        { id: 6, title: 'Urban Suites', category: 'Hoteleros', img: '/img/urbania-suites2.png' },
        { id: 7, title: 'Oficina Central', category: 'Oficinas', img: '/img/oficina-central.png' },
        { id: 8, title: 'Espacio Corporativo', category: 'Oficinas', img: '/img/espacio-corporativo.png' },
        { id: 9, title: 'Oficina Moderna', category: 'Oficinas', img: '/img/oficina-moderna.png' },
        { id: 10, title: 'Edificio Empresarial', category: 'Edificaciones', img: '/img/edificio-empresarial.png' },
        { id: 11, title: 'Torre de Negocios', category: 'Edificaciones', img: '/img/torre-negocios.png' },
        { id: 12, title: 'Complejo Empresarial', category: 'Edificaciones', img: '/img/complejo-empresarial.png' },
        { id: 13, title: 'Vivienda Familiar', category: 'Viviendas', img: '/img/vivienda-familiar.png' },
        { id: 14, title: 'Casa de Campo', category: 'Viviendas', img: '/img/casa-campo.png' },
        { id: 15, title: 'Dúplex Urbano', category: 'Viviendas', img: '/img/duplex-urbano.png' },
        { id: 16, title: 'Selva Viva Eco-Resort', category: 'Hoteleros', img: '/img/selva-viva7.png' },
        { id: 17, title: 'Dunas de Cristal', category: 'Hoteleros', img: '/img/dunas-cristal1.png' },
        { id: 18, title: 'Renaissance Palace', category: 'Hoteleros', img: '/img/renaissance1.png' },
        { id: 19, title: 'Oficina Central', category: 'Oficinas', img: '/img/oficina-central.png' },
        { id: 20, title: 'Espacio Corporativo', category: 'Oficinas', img: '/img/espacio-corporativo.png' },
        { id: 22, title: 'Edificio Empresarial', category: 'Edificaciones', img: '/img/edificio-empresarial.png' },
        { id: 23, title: 'Torre de Negocios', category: 'Edificaciones', img: '/img/torre-negocios.png' },
        { id: 24, title: 'Complejo Empresarial', category: 'Edificaciones', img: '/img/complejo-empresarial.png' },
        { id: 25, title: 'Vivienda Familiar', category: 'Viviendas', img: '/img/vivienda-familiar.png' },
        { id: 26, title: 'Casa de Campo', category: 'Viviendas', img: '/img/casa-campo.png' },
        { id: 27, title: 'Dúplex Urbano', category: 'Viviendas', img: '/img/duplex-urbano.png' },
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
            <section className="banner-proyectos">
                <p>INTERIORISMO, ARQUITECTURA, DISEÑO Y REFORMAS INTEGRALES</p>
                <h1>LOS PROYECTOS</h1>
            </section>
            <section className="container my-5">
                <h2 className='text-center pt-5 pb-5'>Filtrar Proyectos</h2>
                {/* Añado d-flex justify-content-center para centrar los botones */}
                <div className="filters py-3 d-flex justify-content-center">
                    <button className="btn me-2 boton" onClick={() => setSelectedCategory('Todo')}>Todo</button>
                    <button className="btn me-2 boton" onClick={() => setSelectedCategory('Hoteleros')}>Hoteleros</button>
                    <button className="btn me-2 boton" onClick={() => setSelectedCategory('Oficinas')}>Oficinas</button>
                    <button className="btn me-2 boton" onClick={() => setSelectedCategory('Edificaciones')}>Edificaciones</button>
                    <button className="btn boton" onClick={() => setSelectedCategory('Viviendas')}>Viviendas</button>
                </div>

    
                <div className="row g-4 mt-4 lista-proyectos">
                    {filteredProjects.map((project) => (
                        <div
                            className="col-md-4"
                            key={project.id}
                            onClick={() => handleProjectClick(project.id)}
                        >
                            <div className="project-item" style={{ backgroundImage: `url(${project.img})` }}>
                                <div className="project-overlay">
                                    <h4>{project.title}</h4>
                                   
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
    
    
    
    
};

export default Projects;
