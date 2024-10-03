import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                
                
                    {/* Ruta para la página de proyectos */}
                <Route path="/" element={<Projects />} />
                {/* Ruta para los detalles del proyecto */}
                <Route path="/project/:id" element={<ProjectDetail />} />
                
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
