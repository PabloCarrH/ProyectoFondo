import React, { useEffect, useRef, useState } from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, LineElement, BarElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement } from 'chart.js';


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
    </div>
);
};

export default Dashboard;
