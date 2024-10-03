import React from 'react';

const Services = () => {
    return (
        <div>
            <section className="banner">
                <h1>Nuestros Servicios</h1>
                <p>Desde la concepción hasta la creación: espacios que hablan de ti.</p>
            </section>
            <section className="container my-5">
                <h2>Nuestros Servicios Destacados</h2>
                <div className="row">
                    <div className="col-md-4">
                        <h3>Interiorismo y Decoración</h3>
                        <p>Descripción del servicio...</p>
                        <button>Saber más</button>
                    </div>
                    <div className="col-md-4">
                        <h3>Arquitectura y Construcción</h3>
                        <p>Descripción del servicio...</p>
                        <button>Saber más</button>
                    </div>
                    <div className="col-md-4">
                        <h3>Reformas Integrales</h3>
                        <p>Descripción del servicio...</p>
                        <button>Saber más</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
