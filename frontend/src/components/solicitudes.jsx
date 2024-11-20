import React, { useState, useEffect } from 'react';
import '../Estilos/gestion.css';

const ContactTable = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('contacto');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/${filter}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = async (Nombre) => {
    try {
      // Suponiendo que tienes una API para eliminar registros
      await fetch(`http://localhost:3000/api/${filter}/${Nombre}`, {
        method: 'DELETE',
      });
      // Actualizar los datos después de eliminar
      setData(data.filter(item => item.Nombre !== Nombre));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <h1 style={{
        color: '#073b51',
        marginLeft: '5%',
        marginTop: '2%'
      }}>Información de Contacto</h1>

      <select style={{
        width: '20%',
        marginTop: '10px',
        marginLeft: '5%',
        padding: '10px',
        border: 'none',
        backgroundColor: '#dde0d9',
        borderRadius: '20px',
        fontSize: '16px',
        outline: 'none'
      }} onChange={handleFilterChange} value={filter}>
        <option value="contacto">Contacto</option>
        <option value="docs">Documentos</option>
        <option value="sugerencias">Sugerencias</option>
        <option value="programas">Programas</option>
      </select>

      <table>
        <thead>
          <tr>
            {filter === 'contacto' ? (
              <>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>País</th>
                <th>Correo</th>
                <th>Acciones</th>
              </>
            ) : filter === 'docs' ? (
              <>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Solicitud</th>
                <th>Acciones</th>
              </>
            ) : filter === 'sugerencias' ? (
              <>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Sugerencia</th>
                <th>Acciones</th>
              </>
            ) : filter === 'programas' ? (
              <>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Programa</th>
                <th>Acciones</th>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {filter === 'contacto' ? (
                <>
                  <td>{item.Nombre}</td>
                  <td>{item.Telefono}</td>
                  <td>{item.Pais}</td>
                  <td>{item.Correo}</td>
                </>
              ) : filter === 'docs' ? (
                <>
                  <td>{item.Nombre}</td>
                  <td>{item.Correo}</td>
                  <td>{item.solicitud}</td>
                </>
              ) : filter === 'sugerencias' ? (
                <>
                  <td>{item.Nombre}</td>
                  <td>{item.Correo}</td>
                  <td>{item.sugerencia}</td>
                </>
              ) : filter === 'programas' ? (
                <>
                  <td>{item.Nombre}</td>
                  <td>{item.Correo}</td>
                  <td>{item.Programa}</td>
                </>
              ) : null}
              <td>
                <button
                  style={{
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleDelete(item.Nombre)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
