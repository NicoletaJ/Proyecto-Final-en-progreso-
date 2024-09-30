import React from 'react';
import './Home.css'; // Importa el archivo CSS general
import Banner from '../components/Banner';
import Counter from '../components/Counter';
import FAQ from '../components/FAQ';
import ProjectItem from '../components/ProjectItem';
import BannerInferior from '../components/BannerInferior';

const Home = () => {
    return (
        <div>
            <Banner />
            <Counter />
            <section className="container text-center informacion-post-contador pt-5">
                <h5>REALIZAMOS OBRAS CON EXCELENTES RESULTADOS</h5>
                <h2 className="pt-3 pb-3">CONSTRUCCIONES COMPLETAS E INTERIORISMO DE CALIDAD</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum explicabo quasi est repudiandae? Commodi laborum illo dolore, consectetur exercitationem, iure eos qui tenetur dicta, ad voluptatum deserunt unde odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, amet dolores porro consequuntur, architecto fugiat assumenda itaque rerum illum doloribus iure minima esse, aperiam cupiditate. Explicabo id doloremque iure quas?</p>
                <a href="/projects" className="btn btn-primary boton">VER PROYECTOS</a>
            </section>
            <section className="container-fluid ejemplo-proyectos my-5">
                <div className="row align-items-center pt-5">
                    <div className="col-md-4">
                        <ProjectItem
                            title="Vivienda Moderna"
                            subtitle="Materiales y texturas combinados a la perfección"
                            className="vivienda-moderna"
                        />
                    </div>
                    <div className="col-md-4">
                        <ProjectItem
                            title="Edificio Viena"
                            subtitle="Un emblema de diseño"
                            className="edificio-viena"
                        />
                    </div>
                    <div className="col-md-4">
                        <ProjectItem
                            title="Vivienda Rústica"
                            subtitle="Donde lo tradicional y lo moderno conviven"
                            className="vivienda-rustica"
                        />
                    </div>
                </div>
            </section>
            <FAQ />
            <BannerInferior/>
        </div>
    );
};

export default Home;
