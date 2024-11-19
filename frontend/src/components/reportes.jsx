import React, { useRef } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Dashboard = () => {

  const chartContainerRef = useRef(null);

  const downloadReportM = () => {
    axios({
      url: 'http://localhost:3000/api/generateReportM',
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Reporte Ventas Mensual.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error) => console.error('Error al descargar el reporte:', error));
  };

  const downloadReportY = () => {
    axios({
      url: 'http://localhost:3000/api/generateReportY',
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Reporte Ventas Anual.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error) => console.error('Error al descargar el reporte:', error));
  };

  const downloadReportD = () => {
    axios({
      url: 'http://localhost:3000/api/generateReportD',
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Reporte de afiliados en Mora.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch((error) => console.error('Error al descargar el reporte:', error));
  };

  return (
    <div ref={chartContainerRef}>
      
      <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Header style={{fontSize: '20px', color: '#073b51'}}>Reporte de Ventas por mes</Card.Header>
          <Card.Body>
            <Card.Title>..............................................................</Card.Title>
            <Card.Text style={{textAlign: 'left', paddingInlineStart: '20px'}}>
              Aquí se muestra el resumen de las ventas en el mes selccionado en el fondo de empleados.
            </Card.Text>
            <Button onClick={downloadReportM} variant="primary" style={{ backgroundColor: '#073b51', border: 'none' }}>Generar Reporte</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Header style={{fontSize: '20px', color: '#073b51'}}>Reporte de Ventas por año</Card.Header>
          <Card.Body>
            <Card.Title>..............................................................</Card.Title>
            <Card.Text style={{textAlign: 'left', paddingInlineStart: '20px'}}>
              Aquí se muestra el resumen de las ventas en el año selccionado en el fondo de empleados.
            </Card.Text>
            <Button onClick={downloadReportY} variant="primary" style={{ backgroundColor: '#073b51', border: 'none' }}>Generar Reporte</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Header style={{fontSize: '20px', color: '#073b51'}}>Reporte de afiliados en mora</Card.Header>
          <Card.Body>
            <Card.Title>..............................................................</Card.Title>
            <Card.Text style={{textAlign: 'left', paddingInlineStart: '20px'}}>
              Aquí se muestra el resumen de los afiliados de acuerdo al estado financiero de cada uno en el fondo de empleados.
            </Card.Text>
            <Button onClick={downloadReportD} variant="primary" style={{ backgroundColor: '#073b51', border: 'none' }}>Generar Reporte</Button>
          </Card.Body>
        </Card>

      </div>

      <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Header style={{fontSize: '20px', color: '#073b51'}}>Resumen de Ventas</Card.Header>
          <Card.Body>
            <Card.Title>..............................................................</Card.Title>
            <Card.Text style={{textAlign: 'left', paddingInlineStart: '20px'}}>
              Aquí se muestra el resumen de las ventas generales en el fondo de empleados.
            </Card.Text>
            <Button variant="primary" style={{ backgroundColor: '#073b51', border: 'none' }}>Generar Reporte</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Header style={{fontSize: '20px', color: '#073b51'}}>Resumen de Ventas</Card.Header>
          <Card.Body>
            <Card.Title>..............................................................</Card.Title>
            <Card.Text style={{textAlign: 'left', paddingInlineStart: '20px'}}>
              Aquí se muestra el resumen de las ventas generales en el fondo de empleados.
            </Card.Text>
            <Button variant="primary" style={{ backgroundColor: '#073b51', border: 'none' }}>Generar Reporte</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Header style={{fontSize: '20px', color: '#073b51'}}>Resumen de Ventas</Card.Header>
          <Card.Body>
            <Card.Title>..............................................................</Card.Title>
            <Card.Text style={{textAlign: 'left', paddingInlineStart: '20px'}}>
              Aquí se muestra el resumen de las ventas generales en el fondo de empleados.
            </Card.Text>
            <Button variant="primary" style={{ backgroundColor: '#073b51', border: 'none' }}>Generar Reporte</Button>
          </Card.Body>
        </Card>

      </div>

      <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Header style={{fontSize: '20px', color: '#073b51'}}>Resumen de Ventas</Card.Header>
          <Card.Body>
            <Card.Title>..............................................................</Card.Title>
            <Card.Text style={{textAlign: 'left', paddingInlineStart: '20px'}}>
              Aquí se muestra el resumen de las ventas generales en el fondo de empleados.
            </Card.Text>
            <Button variant="primary" style={{ backgroundColor: '#073b51', border: 'none' }}>Generar Reporte</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Header style={{fontSize: '20px', color: '#073b51'}}>Resumen de Ventas</Card.Header>
          <Card.Body>
            <Card.Title>..............................................................</Card.Title>
            <Card.Text style={{textAlign: 'left', paddingInlineStart: '20px'}}>
              Aquí se muestra el resumen de las ventas generales en el fondo de empleados.
            </Card.Text>
            <Button variant="primary" style={{ backgroundColor: '#073b51', border: 'none' }}>Generar Reporte</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '1%' }}>
          <Card.Header style={{fontSize: '20px', color: '#073b51'}}>Resumen de Ventas</Card.Header>
          <Card.Body>
            <Card.Title>..............................................................</Card.Title>
            <Card.Text style={{textAlign: 'left', paddingInlineStart: '20px'}}>
              Aquí se muestra el resumen de las ventas generales en el fondo de empleados.
            </Card.Text>
            <Button variant="primary" style={{ backgroundColor: '#073b51', border: 'none' }}>Generar Reporte</Button>
          </Card.Body>
        </Card>

      </div>

    </div>
);
};

export default Dashboard;
