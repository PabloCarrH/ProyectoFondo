import React, { useEffect, useRef, useState } from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, LineElement, BarElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

Chart.register(LineElement, ArcElement, BarElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [SalesDatay, setSalesDatay] = useState([]);
  const [totalCosts, setTotalCosts] = useState(0);
  const [affiliatesData, setAffiliatesData] = useState([]);
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      axios.get('http://localhost:3000/api/sales')
        .then(response => setSalesData(response.data))
        .catch(error => console.error('Error fetching sales data', error));

        axios.get('http://localhost:3000/api/sales1')
        .then(response => setSalesDatay(response.data))
        .catch(error => console.error('Error fetching sales data', error));

      axios.get('http://localhost:3000/api/costs')
        .then(response => setTotalCosts(parseFloat(response.data[0].totalCosts))) // Asegúrate de convertir el string a número
        .catch(error => console.error('Error fetching costs data', error));

      axios.get('http://localhost:3000/api/affiliates')
        .then(response => setAffiliatesData(response.data))
        .catch(error => console.error('Error fetching affiliates data', error));
    }
  }, []);

  const totalSales = salesData.reduce((acc, item) => acc + item.sales, 0);

  const pieData = {
    labels: ['Ventas', 'Costos'],
    datasets: [
      {
        data: [totalSales, totalCosts],
        backgroundColor: ['#4fd186', '#FF6384'],
      },
    ],
  };

  const barData = {
    labels: SalesDatay.map(item => item.year),
    datasets: [
      {
        label: 'Ventas',
        data: SalesDatay.map(item => item.total_sales),
        backgroundColor: '#4fd186',
      },
    ],
  };

  const lineData = {
    labels: affiliatesData.map(item => item.period),
    datasets: [
      {
        label: 'Afiliados',
        data: affiliatesData.map(item => item.count),
        fill: false,
        borderColor: '#4fd186',
      },
    ],
  };

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

  const downloadReportA = () => {
    axios({
      url: 'http://localhost:3000/api/generateReportA',
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
      <div className='GraficPie' style={{
        width: '29.5%',
        float: 'left',
        marginLeft: '5%',
        marginTop: '2%',
        backgroundColor: 'white',
        padding: '1%'
      }}>
        <center><h3 style={{ color: '#073b51', marginLeft: '-9%' }}>Comparación Ventas vs Costos</h3></center>
        <Pie data={pieData} />
      </div>

      <div className='Graficbar' style={{
        width: '55%',
        float: 'left',
        marginLeft: '5%',
        marginTop: '2%',
        backgroundColor: 'white',
        padding: '2%'
      }}>
        <center><h3 style={{ color: '#073b51' }}>Ventas Anuales</h3></center>
        <Bar data={barData} />
      </div>

      <div className='Graficbar' style={{
        width: '89.5%',
        marginLeft: '5%',
        marginTop: '2%',
        backgroundColor: 'white',
        padding: '2%'
      }}>
        <center><h3 style={{ color: '#073b51' }}>Crecimiento/Decrecimiento de Afiliados</h3></center>
        <Line data={lineData} />
      </div>

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
            <Button onClick={{}} variant="primary" style={{ backgroundColor: '#073b51', border: 'none' }}>Generar Reporte</Button>
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
