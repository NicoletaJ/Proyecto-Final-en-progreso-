import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css'; // Estilos exclusivos para este componente
import BannerInferior from '../components/BannerInferior';

const ProjectDetail = () => {
    const allProjects = [
        { 
        id: 1, 
        title: 'Vivienda Moderna', 
        category: 'Viviendas', 
        img: '/img/proyecto-moderno.png',
        description: 'Proyecto de reforma integral en una vivienda moderna, con un diseño contemporáneo.',
        longDescription: `
            <h2 className='pb-3'>Vivienda Moderna</h2>
            <p>La Vivienda Moderna es un ejemplo de integración perfecta entre estilo contemporáneo y funcionalidad.</p>
            <p>El diseño incluyó la creación de espacios abiertos que maximizan la luz natural y la ventilación. 
            Se utilizaron materiales como el acero y el vidrio para enfatizar la modernidad y elegancia.</p>
            <p>Las áreas comunes de la vivienda incluyen una sala de estar con amplias ventanas, un comedor 
            moderno con vistas al jardín, y una cocina abierta diseñada para la máxima eficiencia.</p>
            <h4 className='pt-5 pb-2'>Detalles de diseño interior</h4>
            <p>Los detalles interiores incluyen techos altos, suelos de madera y mobiliario minimalista 
            que respeta la esencia del diseño moderno.</p>`,
        images: [
            '/img/proyecto-moderno1.png',
            '/img/proyecto-moderno2.png',
            '/img/proyecto-moderno3.png',
            '/img/proyecto-moderno4.png'
        ]
    },
        { 
            id: 2, 
            title: 'Edificio Viena', 
            category: 'Edificaciones', 
            img: '/img/edificio-viena.png',
            description: 'Edificación emblemática con un diseño arquitectónico moderno en el centro de la ciudad.',
            longDescription: `
                <h2 className='pb-3'>Edificio Viena</h2>
                <p>El Edificio Viena es una estructura moderna que combina elegancia y sostenibilidad. El diseño de 
                la fachada utiliza paneles de vidrio para proporcionar una apariencia contemporánea y maximizar la luz natural.</p>
                <p>El edificio cuenta con varios niveles de oficinas y un área comercial en la planta baja, lo que lo convierte en un espacio versátil para negocios y empresas.</p>
                <h4 className='pt-5 pb-2'>Eficiencia energética y sostenibilidad</h4>
                <p>El edificio ha sido diseñado para cumplir con los más altos estándares de eficiencia energética, utilizando 
                tecnología avanzada en climatización y aislamiento.</p>`,
            images: [
                '/img/edificio-viena1.png',
                '/img/edificio-viena2.png',
                '/img/edificio-viena3.png',
                '/img/edificio-viena4.png'
            ]
        },
        {
            id: 3,
            title: 'Vivienda Rústica',
            category: 'Viviendas',
            img: '/img/vivienda-rustica.png',
            description: 'Vivienda de estilo rústico con toques modernos.',
            longDescription: `
                <h2 className='pb-3'>Vivienda Rústica</h2>
                <p>La Vivienda Rústica combina el encanto tradicional con las comodidades modernas. 
                Ubicada en un entorno natural, esta vivienda ha sido diseñada para integrarse perfectamente en su entorno.</p>
                <p>Los materiales utilizados incluyen piedra natural, madera reciclada, y techos de tejas que respetan el diseño rústico tradicional.</p>
                <h4 className='pt-5 pb-2'>Diseño de interiores acogedor</h4>
                <p>El interior de la vivienda está diseñado para ser acogedor y funcional, con una chimenea central y amplias ventanas 
                que permiten disfrutar del paisaje.</p>`,
            images: [
                '/img/vivienda-rustica1.png',
                '/img/vivienda-rustica2.png',
                '/img/vivienda-rustica3.png',
                '/img/vivienda-rustica4.png'
            ]
        },
        {
            id: 4,
            title: 'Hotel Boutique en la Montaña',
            category: 'Hoteleros',
            img: '/img/hotel-boutique7.png',
            description: 'Hotel boutique en la montaña con un diseño exclusivo.',
            longDescription: `
                <h2 className='pb-3'>Hotel Boutique en la Montaña</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, modi temporibus sint dolorum, voluptatum id perferendis tempora quam nemo eum pariatur saepe doloremque deleniti tempore enim autem perspiciatis! Laborum, odit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt, ad, illo nulla cum rerum est odit doloremque, quam eveniet iste perferendis quasi. Repellendus cum, totam impedit deleniti autem quo?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet enim perferendis voluptas id ducimus possimus similique veritatis dolore vel excepturi, ullam nisi doloremque optio perspiciatis, aut vero! Incidunt, blanditiis vel?</p>
                <p className='pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita recusandae cumque alias nesciunt dolorem praesentium iure quidem quod libero! Cum maxime quis laborum molestiae sed recusandae amet dicta, nihil quod!</p>
                <h4 className='pt-5 pb-2'>Armonía exclusiva: La cuidadosa elección de materiales y diseño personalizado de vivienda</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, modi temporibus sint dolorum, voluptatum id perferendis tempora quam nemo eum pariatur saepe doloremque deleniti tempore enim autem perspiciatis! Laborum, odit.</p>
                <h4 className='pt-5 pb-2'>Elegancia lumínica: Diseño exclusivo y detalles sofisticados en la sala de estar/ comedor</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, modi temporibus sint dolorum, voluptatum id perferendis tempora quam nemo eum pariatur saepe doloremque deleniti tempore enim autem perspiciatis! Laborum, odit.</p>`,
            images: [
                '/img/hotel-boutique1.png',
                '/img/hotel-boutique2.png',
                '/img/hotel-boutique3.png',
                '/img/hotel-boutique4.png',
                '/img/hotel-boutique5.png',
                '/img/hotel-boutique6.png',
                '/img/hotel-boutique7.png',
                '/img/hotel-boutique8.png',
                '/img/hotel-boutique9.png',
                '/img/hotel-boutique10.png',
                '/img/hotel-boutique11.png'
            ]
        },
        {
            id: 5,
            title: 'Resort Costa Blanca',
            category: 'Hoteleros',
            img: '/img/resort-costablanca6.png',
            description: 'Resort en la costa blanca con un diseño moderno y funcional.',
            longDescription: `
                <h2 className='pb-3'>Resort Costa Blanca</h2>
                <p>El Resort Costa Blanca es un paraíso frente al mar, diseñado para ofrecer lujo y confort a sus visitantes.</p>
                <p>El diseño de las habitaciones combina lo mejor del interiorismo moderno con materiales de alta calidad, proporcionando una experiencia única de relajación y exclusividad.</p>
                <h4 className='pt-5 pb-2'>Instalaciones exclusivas</h4>
                <p>Las instalaciones incluyen una piscina infinita, spa de lujo, y restaurantes de alta cocina, todo envuelto en un ambiente de tranquilidad y elegancia.</p>`,
            images: [
                '/img/resort-costablanca1.png',
                '/img/resort-costablanca2.png',
                '/img/resort-costablanca3.png',
                '/img/resort-costablanca4.png'
            ]
        },
        {
            id: 6,
            title: 'Urban Suites',
            category: 'Hoteleros',
            img: '/img/urbania-suites2.png',
            description: 'Urban Suites: Diseño minimalista en el corazón de la ciudad.',
            longDescription: `
                <h2 className='pb-3'>Urban Suites</h2>
                <p>Ubicado en el corazón de la ciudad, Urban Suites es un hotel boutique diseñado para viajeros modernos que buscan comodidad y estilo.</p>
                <p>El diseño minimalista combina líneas limpias, colores neutros, y una decoración moderna que refleja el espíritu cosmopolita del hotel.</p>
                <h4 className='pt-5 pb-2'>Diseño interior sofisticado</h4>
                <p>Las habitaciones están diseñadas para maximizar el espacio y la luz natural, proporcionando un ambiente relajante y acogedor en medio de la ciudad.</p>`,
            images: [
                '/img/urbania-suites1.png',
                '/img/urbania-suites2.png',
                '/img/urbania-suites3.png',
                '/img/urbania-suites4.png'
            ]
        }
    ];

    const { id } = useParams();
    const project = allProjects.find(p => p.id === parseInt(id));

    if (!project) {
        return <div className="container my-5">Proyecto no encontrado</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                {/* Columna de imágenes en dos columnas */}
                <div className="col-md-6">
                    <div className="row">
                        {project.images.map((image, index) => (
                            <div className="col-md-6 mb-3" key={index}>
                                <img src={image} alt={`Imagen ${index + 1}`} className="img-fluid" />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Columna de descripción */}
                <div className="col-md-6">
                    {project.longDescription ? (
                        <div dangerouslySetInnerHTML={{ __html: project.longDescription }} />
                    ) : (
                        <>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </>
                    )}
                </div>
            </div>
            
            <div className="banner-inferior-wrapper">
                <BannerInferior />
            </div>
        </div>
    );
};

export default ProjectDetail;
