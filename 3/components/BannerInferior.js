import React from 'react';
import './BannerInferior.css'; // Asegúrate de que el archivo CSS se importe correctamente
import { Link } from 'react-router-dom';

const BannerInferior = () => {
    return (
        <aside className="container-fluid elementor-widget-container banner-inferior">
            <h2 className='pb-3'>¿Quieres un proyecto con el sello <br/>SOLANA & CO?</h2>
            <p>
            En nuestro estudio de diseño realizamos proyectos y servicios de interiorismo, arquitectura y reformas integrales, dirigidos a particulares, emprendedores y empresas. <br/> Nos adelantamos a tus necesidades para brindarte los mejores resultados
            </p>
            <Link to="/contact"><a class="btn btn-primary boton">CONTACTA AHORA</a></Link>
            

        </aside>
    );
};

export default BannerInferior;