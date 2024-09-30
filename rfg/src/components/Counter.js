import React, { useEffect } from 'react';
import './Counter.css'; // Asegúrate de que este archivo existe o crea uno para los estilos personalizados.

const Counter = () => {
    useEffect(() => {
        // Seleccionamos todos los elementos con la clase 'counter-value'
        const counters = document.querySelectorAll('.counter-value');
        
        // Configuramos el Intersection Observer para que se active cuando el 10% del elemento sea visible
        const options = {
            root: null, // Se observa respecto al viewport
            threshold: 0.1 // Cuando el 10% del elemento es visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Llamamos a la función de actualización del contador
                    const counter = entry.target;
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const increment = target / 200; // Ajusta la velocidad del contador aquí

                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment);
                            setTimeout(updateCount, 15); // Ajusta la duración de la animación aquí
                        } else {
                            counter.innerText = target;
                        }
                    };

                    updateCount();
                    observer.unobserve(counter); // Dejar de observar después de la primera ejecución
                }
            });
        }, options);

        // Observamos cada contador
        counters.forEach(counter => {
            observer.observe(counter);
        });

    }, []); // Solo ejecuta este useEffect una vez

    return (
        <section className="container text-center my-5">
            <div className="row align-items-center pt-5">
                <div className="col counter-column">
                    <div className="counter">
                        <p>+<span className="counter-value" data-target="300">0</span><br />proyectos</p>
                    </div>
                </div>
                <div className="col counter-column">
                    <div className="counter">
                        <p>+<span className="counter-value" data-target="100000">0</span><br />m² construidos</p>
                    </div>
                </div>
                <div className="col counter-column">
                    <div className="counter">
                        <p>+<span className="counter-value" data-target="20">0</span><br />años de experiencia</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;
