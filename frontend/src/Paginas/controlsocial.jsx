import React, { useState, useEffect } from 'react';
import '../Estilos/controlsocial.css';
import img1 from '../img/money.jpg';
import img2 from '../img/ingeniera.jpg';
import img3 from '../img/usuario.png';
import img4 from '../img/emprendedores.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ControlSocial = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [expandedReport, setExpandedReport] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 2000);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 2000);
  };

  const handlePrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 2000);
  };

  const toggleReport = (index) => {
    setExpandedReport(expandedReport === index ? null : index);
  };

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  useEffect(() => {
    const titleQuestions = [...document.querySelectorAll('.questions_title_control')];
    titleQuestions.forEach(question => {
      question.addEventListener('click', () => {
        let height = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement;
  
        addPadding.classList.toggle('questions_padding--add');
        question.children[1].classList.toggle('questions_arrow--rotate_control');
  
        if (answer.clientHeight === 0) {
          height = answer.scrollHeight;
        }
  
        answer.style.height = `${height}px`;
      });
    });
  }, []);

  return (
    <div className="controlsocial-page">
      <div className="container-control">
        {/* Descripción de Control Social */}
        <section className="descripcion-control">
          <div className="title-container-control">
            <div className="title-bar-control"></div>
            <h1>Descripción de Control Social</h1>
          </div>
          <div className="content-container-control">
            <p>
              El control social permite a la ciudadanía participar activamente en la supervisión y evaluación de las
              acciones implementadas por las autoridades, contribuyendo a una gestión más transparente y eficiente. 
              A través del control social, se fomenta la corresponsabilidad, se fortalece la democracia y se asegura 
              que los recursos públicos sean utilizados de manera adecuada. Los ciudadanos tienen la oportunidad de 
              expresar sus opiniones, sugerencias y quejas, promoviendo una cultura de rendición de cuentas.
            </p>
          </div>
        </section>

        {/* Objetivos y Mecanismos de Participación Ciudadana */}
        <section className="objetivos-control">
          <div className="title-container-control">
            <div className="title-bar-control"></div>
            <h2>Objetivos y Mecanismos de Participación Ciudadana</h2>
          </div>
          <div className="content-container-control">
            <p>Los objetivos incluyen:</p>
            <ul>
              <li>Promover la transparencia en la administración pública.</li>
              <li>Fomentar la participación ciudadana.</li>
              <li>Garantizar la rendición de cuentas por parte de las autoridades.</li>
              <li>Fortalecer la confianza entre la ciudadanía y las instituciones.</li>
              <li>Impulsar el desarrollo sostenible y equitativo.</li>
            </ul>
            <div className="image-carousel-control">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  className={`${index === currentImageIndex ? 'active' : ''} ${fade ? '' : 'inactive'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Informe de Gestión */}
        <section className="informe-gestion-control">
          <div className="title-container-control">
            <div className="title-bar-control"></div>
            <h2>Informe de Gestión</h2>
          </div>
          <div className="content-container-control">
            {[
              { nombre: 'Informe Anual 2023', fecha: '15 de Marzo de 2023' },
              { nombre: 'Reporte de Avance Trimestral Q1 2023', fecha: '30 de Abril de 2023' },
              { nombre: 'Informe de Proyectos 2022', fecha: '20 de Diciembre de 2022' },
              { nombre: 'Reporte de Transparencia 2023', fecha: '10 de Octubre de 2023' }
            ].map((reporte, index) => (
              <div key={index} className="report-container-control">
                <div className="questions_title_control" onClick={() => toggleReport(index)}>
                  <h3>{reporte.nombre}</h3>
                  <FontAwesomeIcon icon={faAngleDown} className={`questions_arrow_control ${expandedReport === index ? 'questions_arrow--rotate_control' : ''}`} />
                </div>
                <div className={`report-content-control ${expandedReport === index ? 'expanded' : ''}`}>
                  <p>Información detallada sobre {reporte.nombre.toLowerCase()} publicado el {reporte.fecha}. Este informe cubre los principales logros y desafíos enfrentados durante el período, así como las estrategias implementadas para alcanzar los objetivos propuestos.</p>
                  <button className="control-btn" onClick={() => window.open('', '_blank')}>Descargue aquí</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos en Curso */}
        <section className="proyectos-curso-control">
          <div className="title-container-control">
            <div className="title-bar-control"></div>
            <h2>Proyectos en Curso</h2>
          </div>
          <div className="content-container-control">
            {[
              { nombre: 'Proyecto de Infraestructura Urbana', fecha: 'Enero 2023' },
              { nombre: 'Programa de Educación Digital', fecha: 'Febrero 2023' },
              { nombre: 'Plan de Desarrollo Sostenible', fecha: 'Marzo 2023' },
              { nombre: 'Iniciativa de Energías Renovables', fecha: 'Abril 2023' }
            ].map((proyecto, index) => (
              <div key={index} className="project-container-control">
                <div className="questions_title_control" onClick={() => toggleProject(index)}>
                  <h3>{proyecto.nombre}</h3>
                  <FontAwesomeIcon icon={faAngleDown} className={`questions_arrow_control ${expandedProject === index ? 'questions_arrow--rotate_control' : ''}`} />
                </div>
                <div className={`project-content-control ${expandedProject === index ? 'expanded' : ''}`}>
                  <p>Detalles sobre {proyecto.nombre.toLowerCase()} iniciado en {proyecto.fecha}. Este proyecto busca mejorar la calidad de vida de los ciudadanos a través de iniciativas específicas y bien planificadas, alineadas con los objetivos de desarrollo sostenible.</p>
                  <button className="control-btn" onClick={() => window.open('', '_blank')}>Descargue aquí</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Espacios de Participación */}
        <section className="espacios-participacion-control">
          <div className="title-container-control">
            <div className="title-bar-control"></div>
            <h2>Espacios de Participación</h2>
          </div>
          <div className="content-container-control">
            <p>Los espacios de participación fomentan la colaboración ciudadana en diversos ámbitos, tales como la planificación de políticas públicas, la supervisión de obras y servicios, y la evaluación de programas gubernamentales.</p>
            <button className="control-btn">Participa Aquí</button>
          </div>
        </section>

        {/* Formulario de Contacto o Sugerencias */}
        <section className="formulario-contacto-control">
          <div className="title-container-control">
            <div className="title-bar-control"></div>
            <h2>Formulario de Contacto o Sugerencias</h2>
          </div>
          <div className="content-container-control">
            <form>
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Correo electrónico" required />
              <textarea placeholder="Escribe tu sugerencia..." required></textarea>
              <button className="control-btn" type="submit">Enviar</button>
            </form>
          </div>
        </section>

        {/* Pie de Página */}
        <footer className="footer">
          <p>Contacto: info@fondos.com | Tel: (555) 123-4567</p>
          <p>Síguenos en: 
            <a href="https://facebook.com/fondos" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
            <a href="https://twitter.com/fondos" target="_blank" rel="noopener noreferrer"> Twitter</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ControlSocial;
