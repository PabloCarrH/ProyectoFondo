import React from 'react';
import '../Estilos/contacto.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contacto = () => {
  return (
    <div className="contacto-page">
      <div className="container-contacto">

        
        <section className="descripcion-contacto">
          <div className="title-container-contacto">
            <h1 className="main-title-contacto">Fondo de Empleados XYZ</h1>
            <div className="title-underline-contacto"></div>
          </div>
          <div className="content-container-contacto">
            <p className="subtitulo-contacto">la mejor opción para tu bienestar financiero</p>
            <div className="beneficios-container-contacto">
              <div className="column-left-contacto">
                <ul>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Soluciones flexibles y beneficios ajustados a tus necesidades para mejorar tu calidad de vida financiera y fomentar tu crecimiento.</li>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Créditos con tasas preferenciales, ideales para financiar proyectos personales y lograr tus metas con condiciones exclusivas.</li>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Asesoramiento financiero personalizado para que puedas tomar decisiones informadas y seguras.</li>
                </ul>
              </div>
              <div className="column-right-contacto">
                <ul>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Convenios únicos con proveedores de servicios y productos, permitiéndote acceder a descuentos especiales y beneficios exclusivos.</li>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Plataforma intuitiva para gestionar tus ahorros y créditos en línea, brindándote control total de tus finanzas desde cualquier lugar.</li>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Talleres y capacitaciones en educación financiera, pensados para mejorar tus habilidades de administración de recursos.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

       
        <div className="title-container-contacto">
          <h2 className="form-title-contacto">Contáctanos</h2>
          <div className="form-title-underline-contacto"></div>
        </div>


        <section className="formulario-contacto-contacto">
          <div className="content-container-contacto">
            <form>
              <input type="text" placeholder="Nombre" required />
              <input type="tel" placeholder="Número de Teléfono" required minLength="10" maxLength="15"/>
              <input type="text" placeholder="País" required />
              <input type="email" placeholder="Correo electrónico" required />
              <textarea placeholder="Cuéntanos cómo te enteraste" required></textarea>
              <textarea placeholder="Escribe tu sugerencia o comentario..." required></textarea>
              <div className="contacto-terms">
                <input type="checkbox" id="acepto" required />
                <label htmlFor="acepto">Acepto la <a href="#">Política de tratamiento de datos personales</a></label>
              </div>
              <button className="contacto-btn" type="submit">Enviar</button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contacto;
