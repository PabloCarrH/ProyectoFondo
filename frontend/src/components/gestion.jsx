import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Estilos/gestion.css';


const Table = () => {
  const [affiliatesData, setAffiliatesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [idFilter, setIdFilter] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingAffiliate, setEditingAffiliate] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/gestion')
      .then(response => {
        setAffiliatesData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => console.error('Error fetching affiliates data', error));
  }, []);

  const handleEdit = (affiliate) => {
    setEditingAffiliate({ ...affiliate });
    setShowEditModal(true);
  };

  const handleDelete = (affiliate) => {
    setEditingAffiliate({ ...affiliate });
    setShowEditModal(true);
  };


  const handleSave = () => {
    axios.put(`http://localhost:3000/api/gestion/${editingAffiliate.id}`, editingAffiliate)
    .then(response => {
      console.log(response.data.message);
      setShowEditModal(false);
      setAffiliatesData(prevData => prevData.map(item => 
        item.id === editingAffiliate.id ? editingAffiliate : item
      ));
    })
    .catch(error => console.error('Error al guardar cambios:', error));
 
  };

  const handleCancel = () => {
    setShowEditModal(false);
    setEditingAffiliate(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingAffiliate((prev) => ({ ...prev, [name]: value }));
  };

  const filterData = () => {
    let data = affiliatesData;
    if (statusFilter) data = data.filter(item => item.status === statusFilter);
    if (yearFilter) data = data.filter(item => item.period.endsWith(yearFilter));
    if (idFilter) data = data.filter(item => item.id.toString().includes(idFilter));
    setFilteredData(data);
  };


  

  useEffect(() => {
    filterData();
  }, [statusFilter, yearFilter, idFilter]);

  return (
    <div>
      <div className='filters' style={{
        float: 'left',
        marginLeft: '6%',
        marginTop: '2%'
      }}>
        <h2 style={{
          color: '#073b51',
          marginLeft: '-20%',
          marginBottom: '5%'
        }}>Filtrar por estado: </h2>
        <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
          <option value="">Todos</option>
          <option value="Al día">Al día</option>
          <option value="En mora">En mora</option>
        </select>
      </div>

      <div className='filters' style={{
        float: 'left',
        marginLeft: '5%',
        marginTop: '2%',
        marginBottom: '2%'
      }}>
        <h2 style={{
          color: '#073b51',
          marginLeft: '-23%',
          marginBottom: '5%'
        }}>Filtrar por año: </h2>
        <select onChange={(e) => setYearFilter(e.target.value)} value={yearFilter}>
          <option value="">Todos</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
        </select>
      </div>

      <div className='filters' style={{
        float: 'left',
        marginLeft: '5%',
        marginTop: '2%',
        marginBottom: '2%'
      }}>
        <h2 style={{
          color: '#073b51',
          marginLeft: '-20%',
          marginBottom: '5%'
        }}>Buscar por ID: </h2>
        <input
          type="text"
          placeholder="Ingrese ID"
          value={idFilter}
          onChange={(e) => setIdFilter(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Período</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Cuota de afiliación</th>
            <th>Cuota mensual</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(affiliate => (
            <tr key={affiliate.id}>
              <td>{affiliate.id}</td>
              <td>{affiliate.period}</td>
              <td>{affiliate.name}</td>
              <td>{affiliate.email}</td>
              <td>{affiliate.membership_fee}</td>
              <td>{affiliate.monthly_fee}</td>
              <td>{affiliate.status}</td>
              <td>
                <center>
                  <button style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'green',
                    color: 'white',
                    margin: '10px',
                    borderRadius: '25px',
                    border: '2px solid green'
                  }}
                    onClick={() => handleEdit(affiliate)}>
                    🖉
                  </button>
                  <button style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'red',
                    color: 'white',
                    margin: '10px',
                    borderRadius: '25px',
                    border: '2px solid red'
                  }}
                    onClick={() => handleDelete(affiliate.id)}>
                    🗑️
                  </button>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditModal && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1000
        }}>
          <center><h2 style={{color: '#073b51', marginLeft: '-16%', marginBottom: '7%'}}>Editar Afiliado</h2></center>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={editingAffiliate.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              name="email"
              value={editingAffiliate.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Cuota de afiliación:
            <input
              type="number"
              name="membership_fee"
              value={editingAffiliate.membership_fee}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Cuota mensual:
            <input
              type="number"
              name="monthly_fee"
              value={editingAffiliate.monthly_fee}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Estado:
            <select
              name="status"
              value={editingAffiliate.status}
              onChange={handleInputChange}
            >
              <option value="Al día">Al día</option>
              <option value="En mora">En mora</option>
            </select>
          </label>
          <div style={{ marginTop: '10px' }}>
            <button onClick={handleSave} style={{ marginRight: '10px' }}>Guardar</button>
            <button onClick={handleCancel}>Cancelar</button>
          </div>
        </div>
      )}

      {showEditModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999
        }} onClick={handleCancel}></div>
      )}
    </div>
  );
};

export default Table;
