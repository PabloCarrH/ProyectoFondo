import React, { useState } from 'react';
import '../Estilos/documentos.css';

const Documentos = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [solicitud, setSolicitud] = useState('');

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  const handlePreview = (url) => {
    window.open(url, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/enviarD', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Nombre: nombre,
          Correo: correo,
          solicitud,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.mensaje); // Mostrar alerta con el mensaje del servidor
        setNombre('');
        setCorreo('');
        setSolicitud('');
      } else {
        alert('Hubo un error al enviar tu solicitud. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al conectar con el servidor.');
    }
  };

  return (
    <div className="containerdoc">
      <div className="headerdoc">
        <h1 className="tituloDoc">Gestión de Documentos</h1>
      </div>

      <div className="descripcionDoc">
        <p>
          En esta sección encontrarás documentos como políticas internas, informes,
          actas, entre otros, que son esenciales para el funcionamiento y la
          transparencia de la organización.
        </p>
      </div>

      <div className="listaDocumentos">
        <div className="containerdocumento1">
          <h2>Política de Privacidad</h2>
          <p>
            Este documento detalla cómo recopilamos, usamos y protegemos la
            información personal de nuestros usuarios. Es fundamental para garantizar la
            transparencia y confianza en nuestras operaciones.
          </p>
          <span>Formato: PDF</span>
          <button className="botonDescargaDoc" onClick={() => handleDownload('ruta/a/politica_privacidad.pdf')}>Descargar</button>
          <button className="botonVistaPreviaDoc" onClick={() => handlePreview('ruta/a/politica_privacidad.pdf')}>Vista Previa</button>
        </div>

      </div>

      <div className="containerdocumento2">
          <h2>Informe Anual 2023</h2>
          <p>Este informe presenta un resumen completo de las actividades y logros de la organización durante el año 2023. Incluye análisis financieros, proyectos realizados y perspectivas para el futuro.</p>
          <span>Formato: PDF</span>
          <button className="botonDescargaDoc" onClick={() => handleDownload('ruta/a/informe_anual_2023.pdf')}>Descargar</button>
          <button className="botonVistaPreviaDoc" onClick={() => handlePreview('ruta/a/informe_anual_2023.pdf')}>Vista Previa</button>
        </div>

        <div className="containerdocumento3">
          <h2>Acta de Reunión - Enero 2024</h2>
          <p>Este documento detalla los puntos discutidos y las decisiones tomadas en la reunión del mes de enero de 2024. Es un recurso importante para mantener a todos informados sobre las decisiones estratégicas de la organización.</p>
          <span>Formato: PDF</span>
          <button className="botonDescargaDoc" onClick={() => handleDownload('ruta/a/acta_reunion_enero_2024.pdf')}>Descargar</button>
          <button className="botonVistaPreviaDoc" onClick={() => handlePreview('ruta/a/acta_reunion_enero_2024.pdf')}>Vista Previa</button>
        </div>  

      <div className="formularioContainerDoc">
        <h3 className="tituloFormDoc">Solicitar un Documento</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputNombreDoc"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            className="inputCorreoDoc"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <textarea
            className="textareaSolicitudDoc"
            placeholder="Escribe tu solicitud..."
            value={solicitud}
            onChange={(e) => setSolicitud(e.target.value)}
            required
          />
          <button type="submit" className="botonEnvioDoc">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  );
};

export default Documentos;

