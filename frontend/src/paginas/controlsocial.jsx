import React from 'react';
import '../stylesheets/controlsocial.css';

const ControlSocial = () => {
  return (
    <div className="main-container">
      <section className="control-social">
        <h2>Control Social</h2>
        <p>El control social en la organización fomenta la participación ciudadana y la vigilancia de las actividades públicas. Los ciudadanos pueden evaluar y aportar a la gestión de la organización.</p>
        <h3>Objetivos</h3>
        <ul>
          <li>Promover la transparencia y rendición de cuentas.</li>
          <li>Fomentar la participación activa de la comunidad.</li>
        </ul>
        <h3>Mecanismos de participación</h3>
        <p>Los ciudadanos pueden participar a través de foros, encuestas, y plataformas digitales que permiten la interacción con las autoridades y la organización.</p>
      </section>

      <section className="informe-gestion">
        <h2>Informe de Gestión</h2>
        <p>A continuación se presentan los informes públicos sobre la gestión de la organización.</p>
        <a href="/reportes" target="_blank">Ver informes y estadísticas</a>
      </section>

      <section className="proyectos-en-curso">
        <h2>Proyectos en Curso</h2>
        <p>Estos son los proyectos actuales relacionados con el control social:</p>
        <ul>
          <li><a href="/proyecto1" target="_blank">Proyecto de monitoreo ciudadano</a></li>
          <li><a href="/proyecto2" target="_blank">Iniciativa de participación comunitaria</a></li>
        </ul>
      </section>

      <section className="espacios-participacion">
        <h2>Espacios de Participación</h2>
        <p>Únete a nuestros eventos y foros para aportar tus ideas y participar activamente:</p>
        <ul>
          <li><a href="/evento1" target="_blank">Foro de transparencia</a></li>
          <li><a href="/evento2" target="_blank">Mesa de trabajo ciudadana</a></li>
        </ul>
      </section>

      <section className="contacto">
        <h2>Contacto y Sugerencias</h2>
        <p>Envía tus propuestas, quejas o sugerencias a través del siguiente formulario:</p>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </section>

      <footer className="footer">
        <p>Visita nuestros <a href="/recursos" target="_blank">Recursos adicionales</a> y revisa nuestras <a href="/politicas" target="_blank">Políticas de transparencia</a>.</p>
      </footer>
    </div>
  );
};

export default ControlSocial;
