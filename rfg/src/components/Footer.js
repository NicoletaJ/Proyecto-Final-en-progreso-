import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="container-fluid  footer ">
            <div className="row pt-3 ">
                <div className="col-md-3">
                    <ul>
                        <li>
                            <img className='pb-4' src="/img/logo.png" alt="Logo"  width="80px"/>
                        </li>
                        <li>
                            <a href="mailto:correo@ejemplo.com">correo@ejemplo.com</a>
                        </li>
                        <li>Teléfono: 123-456-7890</li>
                        <li>Solana & Co</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    
                    <ul>
                        <h5 className='pt-4'>La Marca</h5>
                        <li><a href="/about">Quiénes somos</a></li>
                        <li><a href="/projects">Proyectos</a></li>
                        <li><a href="/services">Servicios</a></li>
                        <li><a href="/contact">Contacto</a></li>
                    </ul>
                </div>
                <div className="col-md-3">

                    <ul>
                        <h5 className='pt-4'>Protección</h5>
                        <li><a href="/legal">Aviso Legal</a></li>
                        <li><a href="/cookies">Política de Cookies</a></li>
                        <li><a href="/privacy">Política de Privacidad</a></li>
                    </ul>
                </div>
                <div className="col-md-3">

                    <ul>
                        <h5 className='pt-4'>Síguenos</h5>
                        <li><a href="https://instagram.com">Instagram</a></li>
                        <li><a href="https://linkedin.com">LinkedIn</a></li>
                        <li><a href="https://facebook.com">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
