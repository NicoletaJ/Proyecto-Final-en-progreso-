import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="banner">
                <h1>Contacto</h1>
            </section>
            <section className="container my-5">
                <h2>Contáctanos</h2>
                <p>Teléfono: 123-456-7890</p>
                <p>Email: contacto@solana.com</p>
                <form>
                    <div className="form-group">
                        <label>Nombre y Apellido</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Teléfono</label>
                        <input type="tel" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Consulta</label>
                        <textarea className="form-control" required></textarea>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" required />
                        <label className="form-check-label">He leído y acepto la política de privacidad</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
