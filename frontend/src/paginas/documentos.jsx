import React from 'react';
import '../stylesheets/Documentos.css';

const Documentos = () => {
  const documentos = [
    {
      titulo: "Política de Privacidad",
      descripcion: "Descripción breve sobre la política de privacidad.",
      formato: "PDF",
      enlace: "/docs/politica_de_privacidad.pdf"
    },
    {
      titulo: "Informe Anual 2023",
      descripcion: "Informe anual del año 2023.",
      formato: "PDF",
      enlace: "/docs/informe_anual_2023.pdf"
    },
    {
      titulo: "Acta de Reunión - Enero 2024",
      descripcion: "Acta de la reunión celebrada en enero de 2024.",
      formato: "Word",
      enlace: "/docs/acta_reunion_enero_2024.docx"
    }
  ];

  return (
    <div className="documentoscontainer">
      {/* Contenedor superior */}
      <div className="topcontainer"></div>

      {/* Contenedor de documentos */}
      <div className="documentos-content">
        <h1>Documentos</h1>
        <p>En esta sección, encontrarás documentos importantes como políticas internas, informes y actas.</p>
        
        <div className="documentos-lista">
          {documentos.map((doc, index) => (
            <div key={index} className="documento">
              <h2>{doc.titulo}</h2>
              <p>{doc.descripcion}</p>
              <span>{doc.formato}</span>
              <a href={doc.enlace} download className="descargar-btn">Descargar</a>
            </div>
          ))}
        </div>
        
        <footer className="documentos-footer">
          <p>© 2024 Fondos.com. Todos los derechos reservados.</p>
          <p>Contacto de soporte: soporte@fondos.com</p>
        </footer>
      </div>
    </div>
  );
}

export default Documentos;
