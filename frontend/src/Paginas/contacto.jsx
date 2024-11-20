import React, { useState } from 'react';
import '../Estilos/contacto.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Telefono: '',
    Pais: '',
    Correo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    try {
      const response = await fetch('http://localhost:3000/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const resultado = await response.json();

      if (response.ok) {
        alert(resultado.mensaje); // Muestra el mensaje de éxito
      } else {
        alert('Error: ' + resultado.mensaje); // Muestra el mensaje de error
      }
    } catch (error) {
      alert('Hubo un error al conectar con el servidor');
    }
  };

  return (
    <div className="contacto-page">
      <div className="container-contacto">

        <section className="descripcion-contacto">
          <div className="title-container-contacto">
            <h1 className="main-title-contacto">Fondo de Empleados XYZ</h1>
            <div className="title-underline-contacto"></div>
          </div>
          <div className="content-container-contacto">
            <p className="subtitulo-contacto">La mejor opción para tu bienestar financiero</p>
            <div className="beneficios-container-contacto">
              <div className="column-left-contacto">
                <ul>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Soluciones flexibles y beneficios ajustados a tus necesidades.</li>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Créditos con tasas preferenciales, ideales para tus proyectos personales.</li>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Asesoramiento financiero personalizado.</li>
                </ul>
              </div>
              <div className="column-right-contacto">
                <ul>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Convenios únicos con proveedores de servicios y productos.</li>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Plataforma intuitiva para gestionar tus finanzas en línea.</li>
                  <li><i className="fa fa-check-circle contacto-icon"></i> Talleres y capacitaciones en educación financiera.</li>
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Nombre"
                placeholder="Nombre"
                value={formData.Nombre}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="Telefono"
                placeholder="Número de Teléfono"
                value={formData.Telefono}
                onChange={handleChange}
                required
                minLength="10"
                maxLength="15"
              />
              <input
                type="text"
                name="Pais"
                placeholder="País"
                value={formData.Pais}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="Correo"
                placeholder="Correo electrónico"
                value={formData.Correo}
                onChange={handleChange}
                required
              />
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




