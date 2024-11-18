const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const ExcelJS = require('exceljs'); 

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react',
  port: '3308'
});

const queryDatabase = (query, params, res) => {
  pool.query(query, params, (error, results) => {
    if (error) {
      console.error('Error de base de datos:', error);
      return res.status(500).send('Error en la base de datos');
    }
    res.json(results);
  });
};

app.get('/api/generateReportM', async (req, res) => {
  try {
    const [salesData] = await pool.promise().query('SELECT month_name, SUM(sales) AS total_sales FROM sales_data GROUP BY month_name');

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.columns = [
      { header: 'Mes', key: 'month_name', width: 15 },
      { header: 'Ventas', key: 'total_sales', width: 15 },
    ];

    salesData.forEach((item) => {
      worksheet.addRow({
        month_name: item.month_name,
        total_sales: item.total_sales,
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader('Content-Disposition', 'attachment; filename=Reporte de ventas Mensual.xlsx');
    res.send(buffer);
  } catch (error) {
    console.error('Error al generar el reporte:', error);
    res.status(500).send('Error al generar el reporte');
  }
});

app.get('/api/generateReportY', async (req, res) => {
  try {
    const [salesData] = await pool.promise().query('SELECT year, SUM(sales) AS total_sales FROM sales_data GROUP BY year');

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.columns = [
      { header: 'Año', key: 'year', width: 15 },
      { header: 'Ventas', key: 'total_sales', width: 15 },
    ];

    salesData.forEach((item) => {
      worksheet.addRow({
        year: item.year,
        total_sales: item.total_sales,
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader('Content-Disposition', 'attachment; filename=Reporte de ventas Mensual.xlsx');
    res.send(buffer);
  } catch (error) {
    console.error('Error al generar el reporte:', error);
    res.status(500).send('Error al generar el reporte');
  }
});


app.get('/api/generateReportD', async (req, res) => {
  try {
    const [salesData] = await pool.promise().query('SELECT id, name,  AS total_sales FROM sales_data GROUP BY month_name');

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.columns = [
      { header: 'Mes', key: 'month_name', width: 15 },
      { header: 'Ventas', key: 'total_sales', width: 15 },
    ];

    salesData.forEach((item) => {
      worksheet.addRow({
        month_name: item.month_name,
        total_sales: item.total_sales,
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader('Content-Disposition', 'attachment; filename=Reporte de ventas Mensual.xlsx');
    res.send(buffer);
  } catch (error) {
    console.error('Error al generar el reporte:', error);
    res.status(500).send('Error al generar el reporte');
  }
});


app.post('/register', (req, res) => {
  const { email, password } = req.body;

  pool.execute('SELECT * FROM affiliates_data WHERE email = ?', [email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error de base de datos' });
    }
    if (result.length > 0) {
      return res.status(400).json({ error: 'Este correo ya está registrado' });
    }

    pool.execute('INSERT INTO affiliates_data (email, password) VALUES (?, ?)', [email, password], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al registrar usuario' });
      }
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  pool.execute('SELECT * FROM affiliates_data WHERE email = ? AND password = ?', [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error de base de datos' });
    }
    if (result.length === 0) {
      return res.status(400).json({ error: 'Credenciales incorrectas' });
    }

    const user = result[0];
    if (user.role === 'admin') {
      return res.json({ message: 'Bienvenido admin', role: 'admin' });
    } else {
      return res.json({ message: 'Bienvenido usuario', role: 'user' });
    }
  });
});

app.get('/api/sales', (req, res) => {
  queryDatabase('SELECT month_name, year, sales FROM sales_data', [], res);
});

app.get('/api/sales1', (req, res) => {
  queryDatabase('SELECT year, SUM(sales) AS total_sales FROM sales_data GROUP BY year', [], res);
});

app.get('/api/costs', (req, res) => {
  queryDatabase('SELECT SUM(costs) as totalCosts FROM costs_data', [], res);
});

app.get('/api/affiliates', (req, res) => {
  queryDatabase('SELECT period, count FROM affiliates_data', [], res);
});

app.get('/api/gestion', (req, res) => {
  const query = `SELECT id, period, name, email, membership_fee, monthly_fee, status FROM affiliates_data`;
  queryDatabase(query, [], res);
});

app.put('/api/gestion/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, membership_fee, monthly_fee, status } = req.body;

  const query = `
    UPDATE affiliates_data 
    SET  name = ?, email = ?, membership_fee = ?, monthly_fee = ?, status = ?
    WHERE id = ?`;

  const params = [name, email, membership_fee, monthly_fee, status, id];

  pool.query(query, params, (error, result) => {
    if (error) {
      console.error('Error de base de datos:', error);
      return res.status(500).json({ error: 'Error al actualizar afiliado' });
    }

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Afiliado actualizado exitosamente' });
    } else {
      res.status(404).json({ error: 'Afiliado no encontrado' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
