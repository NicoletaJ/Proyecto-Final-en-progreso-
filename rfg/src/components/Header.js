import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de importar el archivo CSS personalizado

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navegacion-superior">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/img/logo.png" alt="Logo" width="100" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav className="collapse navbar-collapse justify-content-end menu-navegacion-superior" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Link className="nav-link link-nav-superior" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-nav-superior" to="/about">Quiénes somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-nav-superior" to="/projects">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-nav-superior" to="/services">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-nav-superior" to="/contact">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
