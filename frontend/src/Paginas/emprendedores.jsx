import React, { useState } from 'react';
import '../Estilos/emprendedores.css';
import imgemp from '../img/emprendedores.jpg';
import imgtestimony1 from '../img/ingeniera.jpg';
import { FaMoneyBillWave, FaChalkboardTeacher, FaBriefcase, FaHandsHelping, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Emprendedores() {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Nuevo estado para animación

  const stories = [
    {
      id: 1,
      title: 'Juan Pérez - Startup de Tecnología',
      content: 'Gracias al apoyo de nuestra organización, Juan pudo lanzar su plataforma de educación en línea que hoy cuenta con más de 10,000 usuarios.Gracias al apoyo de nuestra organización, Juan pudo lanzar su plataforma de educación en línea que hoy cuenta con más de 10,000 usuarios.Gracias al apoyo de nuestra organización, Juan pudo lanzar su plataforma de educación en línea que hoy cuenta con más de 10,000 usuarios.',
      img: imgtestimony1
    },
    {
      id: 2,
      title: 'María Gómez - Negocio de Artesanías',
      content: 'María transformó su pequeño negocio local en una tienda en línea, exportando productos artesanales a varios países.',
      img: imgemp
    },
    // Agrega más historias si es necesario
  ];

  // Función para manejar la transición de salida y entrada de los testimonios
  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStory((prevStory) => (prevStory + 1) % stories.length);
      setIsAnimating(false);
    }, 500); // Tiempo de la animación de salida
  };

  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStory((prevStory) => (prevStory - 1 + stories.length) % stories.length);
      setIsAnimating(false);
    }, 500); // Tiempo de la animación de salida
  };

  return (
    <div className="emprendedores-page">
      <div className="containeremp">
        {/* Descripción de Apoyo a Emprendedores */}
        <section className="emprendedores-intro">
          <div className="title-container">
            <div className="title-bar"></div>
            <h1>Apoyo a Emprendedores</h1>
          </div>

          {/* Contenedores para texto e imagen */}
          <div className="content-container">
            <div id="texto-apoyo-emprendedores">
              <p>En nuestra organización, apoyamos a emprendedores proporcionando recursos, programas y herramientas que ayudan a transformar ideas en realidades de negocio. Nuestro objetivo es fomentar el crecimiento empresarial a través de capacitaciones, talleres y asesorías.</p>
            </div>
            <div id="contenedorimg">
              <img src={imgemp} alt="Imagen de Apoyo a Emprendedores" />
            </div>
          </div>
        </section>

        {/* Recursos para Emprendedores */}
        <section className="emprendedores-recursos">
          <div className="title-container">
            <div className="title-bar"></div>
            <h2>Recursos para Emprendedores</h2>
          </div>
          
          <div className="cards-container">
            <div className="card" id="containercard1">
              <FaMoneyBillWave className="card-icon" />
              <p>Encuentra recursos financieros para tu negocio.</p>
              <button className="emp-btn" onClick={() => window.open('', '_blank')}>Descargar</button>
            </div>
            <div className="card" id="containercard2">
              <FaChalkboardTeacher className="card-icon" />
              <p>Accede a talleres y cursos de formación en linea.</p>
              <button className="emp-btn" onClick={() => window.open('', '_blank')}>Descargar</button>
            </div>
            <div className="card" id="containercard3">
              <FaBriefcase className="card-icon" />
              <p>Conoce cómo gestionar y hacer crecer tu negocio.</p>
              <button className="emp-btn" onClick={() => window.open('', '_blank')}>Descargar</button>
            </div>
            <div className="card" id="containercard4">
              <FaHandsHelping className="card-icon" />
              <p>Descubre guías y mejores prácticas empresariales.</p>
              <button className="emp-btn" onClick={() => window.open('', '_blank')}>Descargar</button>
            </div>
          </div>
        </section>

        {/* Historias de Éxito */}
        <section className="historias-exito">
          <div className="title-container">
            <div className="title-bar"></div>
            <h2>Historias de Éxito</h2>
          </div>
          <div className="contendor-testimony">
            <FaArrowLeft className="arrow-button" onClick={handlePrevious} />
            <div className="historias">
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  className={`historia ${index === currentStory ? 'historia--show' : ''} ${isAnimating ? 'animating' : ''}`}
                  style={{ display: index === currentStory ? 'flex' : 'none' }}
                >
                  <div className="story-content">
                    <h3 className="titletestimony" >{story.title}</h3>
                    <p className="contenttestimony">{story.content}</p>
                  </div>
                  <div className="story-img-container">
                    <img src={story.img} alt={story.title} className="story-img" />
                  </div>
                </div>
              ))}
            </div>
            <FaArrowRight className="arrow-button" onClick={handleNext} />
          </div>
        </section>
        
        {/* Formulario de Inscripción */}
        <section className="formulario-inscripcion">
          <div className="title-container">
            <div className="title-bar"></div>
            <h2>Inscríbete en nuestros programas</h2>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="programa">Selecciona un programa:</label>
              <select id="programa" name="programa">
                <option value="capacitacion">Capacitación</option>
                <option value="asesoria">Asesoría Empresarial</option>
                <option value="financiamiento">Financiamiento</option>
              </select>
            </div>
            <button type="submit" className="emp-btn inscripcion-btn"onClick={() => window.open('', '_blank')}>Inscribirse</button>
          </form>
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

export default Emprendedores;