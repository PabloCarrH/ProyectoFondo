import React from 'react';
import '../Estilos/Estiloscorporativo.css';
import logo from '../img/logoFinanza.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Corporativo() {
    return (
        <div className="emprendedores-page">
            <div className="containeremp">
                <section className="emprendedores-intro">
                    <div className="title-container">
                        <div className="title-bar"></div>
                            <h1>¿Quienés Somos?</h1>

                    </div>

                    <div className="content-container-corporativo">
                        <div id="texto-apoyo-corporativo">
                            <p>El Fondo es una organización financiera solidaria fundada con el propósito de apoyar el bienestar económico y social de sus asociados. Nuestro Fondo fue creado en el año 1995 con el objetivo de ofrecer a los empleados de nuestra organización oportunidades de ahorro, crédito y beneficios sociales. Nos enorgullece ser una entidad sin ánimo de lucro que promueve la estabilidad financiera y el crecimiento integral de nuestros miembros.</p>
                        </div>
                        <div id="contenedorimg-corporativo">
                            <img src={logo} alt="Imagen de Apoyo a Emprendedores" />
                        </div>
                    </div>
                </section>

                <section className="emprendedores-serviciosCorpora">
                <div className="title-container">
                        <div className="title-bar"></div>
                        <h1>Nuestros Servicios</h1>
                    </div>

                    <div className="content-container-corporativo">

                        <div className="accesos-de-interes">
                            <div className="acceso">
                                <i className="fas fa-info-circle"></i>
                                Transparencia y acceso a la información pública
                            </div>
                            <div className="acceso">
                                <i className="fas fa-child"></i>
                                Portal niños, niñas & adolescentes
                            </div>
                            <div className="acceso">
                                <i className="fas fa-lightbulb"></i>
                                Observatorio virtual generación del pensamiento
                            </div>
                            <div className="acceso">
                                <i className="fas fa-file-contract"></i>
                                Contratación
                            </div>
                            <div className="acceso">
                                <i className="fas fa-tools"></i>
                                Trámites y servicios
                            </div>
                            <div className="acceso">
                                <i className="fas fa-female"></i>
                                Información para mujeres
                            </div>
                        </div>
                    </div>
                </section>

                <section className="emprendedores-intro">
                    <div className="title-container">
                        <div className="title-bar"></div>
                            <h1>Responsabilidad Social</h1>

                    </div>

                    <div className="content-container-corporativo">
                        <div id="texto-apoyo-corporativo">
                            <p>Nuestro principal enfoque es mejorar la calidad de vida de nuestros asociados y sus familias. Promovemos la inclusión financiera ofreciendo productos y servicios accesibles, adaptados a las necesidades de cada individuo, con el fin de reducir las desigualdades económicas. Además, impulsamos programas de educación financiera para empoderar a nuestros miembros con las herramientas necesarias para su estabilidad y crecimiento económico.</p>
                        </div>
                        <div id="contenedorimg-corporativo">
                            <img src={logo} alt="Imagen de Apoyo a Emprendedores" />
                        </div>
                    </div>
                </section>

                

                {/* Pie de Página */}
                <footer className="footer">
                <p>Contacto: info@fondos.com | Tel: (555) 123-4567</p>
                <p>Síguenos en nuestras redes sociales: 
                    <a href="https://facebook.com/fondos" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
                    <a href="https://twitter.com/fondos" target="_blank" rel="noopener noreferrer"> Twitter</a>
                </p>
                </footer>
            </div>
        </div>
    );
}

export default Corporativo;
