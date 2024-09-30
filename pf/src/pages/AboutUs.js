import React from 'react';
import FAQ from '../components/FAQ';
import BannerInferior from '../components/BannerInferior'
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <section className="banner">
                <h1>Quiénes Somos</h1>
            </section>
            <section className="container my-5">
                
                <div className='row'>
                <div className='col-md-6'>
                   <p className='nuestra-filosofia'> <img src="/img/edificio-viena.png" alt=""/></p>
                </div>
                <div className='col-md-6'>
                <h2 className='pt-5 pb-3'>Nuestra Filosofía</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae natus sunt, odio neque nemo necessitatibus, tenetur cumque mollitia provident veniam officiis eveniet quas in temporibus dolore repellendus labore! At.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laudantium reiciendis fugiat rerum laboriosam! Expedita harum cumque officia maiores voluptatem ducimus obcaecati, illo non repudiandae delectus numquam ea ipsum consequuntur?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut hic facilis labore, magnam laborum voluptas natus voluptatum est, quibusdam ipsam aut quas molestiae minima fugiat adipisci, eveniet sed ipsum?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, autem omnis fugit accusamus facilis impedit, tempora nemo magnam dolore odit sit repudiandae eligendi earum amet dolorum eos obcaecati cumque temporibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente, minima ab, placeat incidunt animi magnam deleniti ipsam sit quam voluptatem numquam dolore voluptatum harum neque necessitatibus nobis? Amet, odit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum deserunt quasi sit magnam veritatis temporibus. Molestias corporis cum aperiam, pariatur ratione, totam qui esse voluptatem repellat quisquam quibusdam ducimus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum provident perspiciatis veniam vitae maxime voluptatem iusto voluptates corrupti at ducimus error ex, repudiandae quod voluptatum adipisci excepturi impedit fuga optio.</p>
                    </div>

                </div>
                
                <div>
                <h2 className='pt-5 pb-3 align-items-center'>Nuestros Orígenes</h2>

                   <p className='nuestros-origenes'> <img src="/img/banner-principal1.png" alt=""/></p>
                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae natus sunt, odio neque nemo necessitatibus, tenetur cumque mollitia provident veniam officiis eveniet quas in temporibus dolore repellendus labore! At.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laudantium reiciendis fugiat rerum laboriosam! Expedita harum cumque officia maiores voluptatem ducimus obcaecati, illo non repudiandae delectus numquam ea ipsum consequuntur?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut hic facilis labore, magnam laborum voluptas natus voluptatum est, quibusdam ipsam aut quas molestiae minima fugiat adipisci, eveniet sed ipsum?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, autem omnis fugit accusamus facilis impedit, tempora nemo magnam dolore odit sit repudiandae eligendi earum amet dolorum eos obcaecati cumque temporibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente, minima ab, placeat incidunt animi magnam deleniti ipsam sit quam voluptatem numquam dolore voluptatum harum neque necessitatibus nobis? Amet, odit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum deserunt quasi sit magnam veritatis temporibus. Molestias corporis cum aperiam, pariatur ratione, totam qui esse voluptatem repellat quisquam quibusdam ducimus!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum provident perspiciatis veniam vitae maxime voluptatem iusto voluptates corrupti at ducimus error ex, repudiandae quod voluptatum adipisci excepturi impedit fuga optio.</p>

                </div>
            </section>
            <section className="team">
                <h2>Nuestro Equipo</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img src="/img/equipo1.png" alt="Equipo 1" />
                        <h4>Nombre del Miembro</h4>
                        <p>Descripción de la persona.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/img/equipo2.png" alt="Equipo 2" />
                        <h4>Nombre del Miembro</h4>
                        <p>Descripción de la persona.</p>
                    </div>
                </div>
            </section>
            <FAQ />
            <BannerInferior/>
        </div>
    );
};

export default AboutUs;
