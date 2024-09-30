import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: '¿Cuál es la duración de todo el proceso de un proyecto?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis maxime minus, suscipit soluta atque, perferendis maiores nisi qui ipsam alias aspernatur esse aut. Eum maiores consequatur nisi vel. Doloremque.'
        },
        {
            question: '¿Cuánto cuesta un proyecto de interiorismo y decoración?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae culpa, minima quo vel ducimus aspernatur itaque temporibus ipsam enim, natus aut ipsum pariatur tempore amet? Omnis reprehenderit numquam aperiam!'
        },
        {
            question: '¿Puedo elegir mis propios materiales y proveedores?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere quaerat nobis, blanditiis nam iste aliquam ratione unde impedit. Veritatis placeat porro exercitationem nemo tempore itaque inventore! Nobis, deleniti perferendis?'
        },
        {
            question: '¿Me tengo que hacer cargo de solicitar permisos para la reforma?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ab consequuntur suscipit dolore beatae nisi. Eligendi distinctio necessitatibus veniam doloremque at facilis nam dicta nostrum quod cupiditate laborum, corrupti commodi.'
        },
        {
            question: '¿Qué ocurre si quiero hacer cambios durante la obra?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius odit, cupiditate qui suscipit, doloribus enim libero perferendis voluptate in, culpa natus? Accusamus tempora aut vitae, sit veritatis libero possimus. Enim.'
        },
        {
            question: '¿Cómo garantizan la calidad de los trabajos de construcción?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laborum? Exercitationem necessitatibus tempora recusandae, nostrum iure nisi possimus id neque eos non eligendi praesentium qui adipisci culpa sit asperiores deserunt!'
        }
    ];

    return (
        <aside className="faq-container pb-5">
            <p>PREGUNTAS Y RESPUESTAS</p>
            <h2 className='pt-3 pb-3'>RESOLVEMOS TUS INQUIETUDES</h2>
            <div className="faq-list">
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className={`arrow ${activeIndex === index ? 'rotate' : ''}`}>&#9660;</span>
                        </button>
                        <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default FAQ;
