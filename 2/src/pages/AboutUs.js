import React from 'react';
import FAQ from '../components/FAQ';
import BannerInferior from '../components/BannerInferior'
import './AboutUs.css';




const AboutUs = () => {
    const teamMembers = [
        { name: 'Juan Pérez', position: 'Director', img: '/img/juan-perez.png' },
        { name: 'María Gómez', position: 'Arquitectc partner', img: '/img/maria-gomez.png' },
        { name: 'Carlos López', position: 'Technical office manager', img: '/img/carlos-lopez.png' },
        { name: 'Ana Torres', position: 'Designer', img: '/img/ana-torres.png' },
        { name: 'Luis Ramírez', position: 'Project Manager', img: '/img/luis-ramirez.png' },
        { name: 'Sara Núñez', position: 'Engineer', img: '/img/sara-nunez.png' },
        { name: 'Pedro Molina', position: 'Architect', img: '/img/pedro-molina.png' },
        { name: 'Clara Márquez', position: 'Designer', img: '/img/clara-marquez.png' },
        { name: 'Laura Díaz', position: 'Technical office manager', img: '/img/laura-diaz.png' },
        { name: 'Jorge Herrera', position: 'Engineer', img: '/img/jorge-herrera.png' }
    ];

    return (
        <div>
            <section className="banner">
                <h1>Pasión por el diseño, compromiso con la excelencia. <br/> Transformamos espacios en experiencias únicas.</h1>
            </section>

            <section className="container my-5">
                
                <div className='row'>
                    <h2 className='pt-5 pb-5'>Nuestra Filosofía</h2>
                    <div className='col-md-6'>
                    
                        <p className='nuestra-filosofia'> <img src="/img/nuestra-filosofia.png" alt=""/></p>
                    </div>
                    <div className='col-md-6 pt-5 '>
                
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae natus sunt, odio neque nemo necessitatibus, tenetur cumque mollitia provident veniam officiis eveniet quas in temporibus dolore repellendus labore! At.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laudantium reiciendis fugiat rerum laboriosam! Expedita harum cumque officia maiores voluptatem ducimus obcaecati, illo non repudiandae delectus numquam ea ipsum consequuntur?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut hic facilis labore, magnam laborum voluptas natus voluptatum est, quibusdam ipsam aut quas molestiae minima fugiat adipisci, eveniet sed ipsum?</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, autem omnis fugit accusamus facilis impedit, tempora nemo magnam dolore odit sit repudiandae eligendi earum amet dolorum eos obcaecati cumque temporibus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente, minima ab, placeat incidunt animi magnam deleniti ipsam sit quam voluptatem numquam dolore voluptatum harum neque necessitatibus nobis? Amet, odit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum deserunt quasi sit magnam veritatis temporibus. Molestias corporis cum aperiam, pariatur ratione, totam qui esse voluptatem repellat quisquam quibusdam ducimus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum provident perspiciatis veniam vitae maxime voluptatem iusto voluptates corrupti at ducimus error ex, repudiandae quod voluptatum adipisci excepturi impedit fuga optio.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae natus sunt, odio neque nemo necessitatibus, tenetur cumque mollitia provident veniam officiis eveniet quas in temporibus dolore repellendus labore! At.</p>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut hic facilis labore, magnam laborum voluptas natus voluptatum est, quibusdam ipsam aut quas molestiae minima fugiat adipisci, eveniet sed ipsum?</p>
                    </div>

                    <h2 className='pt-5 pb-5'>Nuestros Orígenes</h2>
                
                    <div className='col-md-6 pt-5'>
                
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae natus sunt, odio neque nemo necessitatibus, tenetur cumque mollitia provident veniam officiis eveniet quas in temporibus dolore repellendus labore! At.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laudantium reiciendis fugiat rerum laboriosam! Expedita harum cumque officia maiores voluptatem ducimus obcaecati, illo non repudiandae delectus numquam ea ipsum consequuntur?</p>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut hic facilis labore, magnam laborum voluptas natus voluptatum est, quibusdam ipsam aut quas molestiae minima fugiat adipisci, eveniet sed ipsum?</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, autem omnis fugit accusamus facilis impedit, tempora nemo magnam dolore odit sit repudiandae eligendi earum amet dolorum eos obcaecati cumque temporibus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente, minima ab, placeat incidunt animi magnam deleniti ipsam sit quam voluptatem numquam dolore voluptatum harum neque necessitatibus nobis? Amet, odit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum deserunt quasi sit magnam veritatis temporibus. Molestias corporis cum aperiam, pariatur ratione, totam qui esse voluptatem repellat quisquam quibusdam ducimus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum provident perspiciatis veniam vitae maxime voluptatem iusto voluptates corrupti at ducimus error ex, repudiandae quod voluptatum adipisci excepturi impedit fuga optio.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quae natus sunt, odio neque nemo necessitatibus, tenetur cumque mollitia provident veniam officiis eveniet quas in temporibus dolore repellendus labore! At.</p>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut hic facilis labore, magnam laborum voluptas natus voluptatum est, quibusdam ipsam aut quas molestiae minima fugiat adipisci, eveniet sed ipsum?</p>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, autem omnis fugit accusamus facilis impedit, tempora nemo magnam dolore odit sit repudiandae eligendi earum amet dolorum eos obcaecati cumque temporibus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sapiente, minima ab, placeat incidunt animi magnam deleniti ipsam sit quam voluptatem numquam dolore voluptatum harum neque necessitatibus nobis? Amet, odit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nostrum deserunt quasi sit magnam veritatis temporibus. Molestias corporis cum aperiam, pariatur ratione, totam qui esse voluptatem repellat quisquam quibusdam ducimus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum provident perspiciatis veniam vitae maxime voluptatem iusto voluptates corrupti at ducimus error ex, repudiandae quod voluptatum adipisci excepturi impedit fuga optio.</p>
                    </div>
                
                    <div className='col-md-6'>
                    
                        <p className='nuestros-origenes'> <img src="/img/nuestros-origenes.png" alt=""/></p>
                    </div>

                </div>
            </section>
            <section className="banner-pre-equipo">
                <h1>La excelencia en cada detalle, <br/> la pasión en cada proyecto</h1>
            </section>

            {/* Sección de Nuestro Equipo */}
            <section className="team-section container my-5 pt-5">
                
                <div className="row">
                    {/* Primer cuadro "Equipo" */}
                    <div className="col-md-4 team-box">
                        <div className="team-item equipo-text">
                            <h3>Equipo</h3>
                        </div>
                    </div>

                    {/* Mostrar los miembros del equipo */}
                    {teamMembers.map((member, index) => (
                        <div className="col-md-4 team-box" key={index}>
                            <div className="team-item" style={{ backgroundImage: `url(${member.img})` }}>
                                <div className="team-hover">
                                    <h4>{member.name}</h4>
                                    <p>{member.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <FAQ />
            <BannerInferior />
        </div>
    );
};

export default AboutUs;