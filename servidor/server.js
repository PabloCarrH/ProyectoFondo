const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs'); 

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
    const [salesData] = await pool.promise().query('SELECT id, name, email, membership_fee, monthly_fee  FROM affiliates_data WHERE status = "En mora"');

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Reporte');

    worksheet.columns = [
      { header: 'Identificacion', key: 'id', width: 15 },
      { header: 'Nombre', key: 'name', width: 15 },
      { header: 'Email', key: 'email', width: 15 },
      { header: 'Pago membresia', key: 'membership_fee', width: 15 },
      { header: 'Pago Mensual', key: 'monthly_fee', width: 15 },
    ];

    salesData.forEach((item) => {
      worksheet.addRow({
        id: item.id,
        name: item.name,
        email: item.email,
        membership_fee: item.membership_fee,
        monthly_fee: item.monthly_fee,
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

app.post('/enviar', (req, res) => {
  const { Nombre, Telefono, Pais, Correo } = req.body;
  const query = 'INSERT INTO contacto (Nombre, Telefono, Pais, Correo) VALUES (?, ?, ?, ?)';
  
  pool.query(query, [Nombre, Telefono, Pais, Correo], (err, result) => {
      if (err) {
          res.status(500).json({ mensaje: 'Error al guardar los datos' });
          return;
      }
      res.status(200).json({ mensaje: '¡Pronto nos contactaremos contigo!' });
  });
});


app.post('/enviarD', (req, res) => {
  const { Nombre ,Correo , solicitud } = req.body;
  const query = 'INSERT INTO docs (Nombre, Correo, solicitud) VALUES (?, ?, ?)';
  
  pool.query(query, [Nombre, Correo, solicitud], (err, result) => {
      if (err) {
          res.status(500).json({ mensaje: 'Error al guardar los datos' });
          return;
      }
      res.status(200).json({ mensaje: '¡Pronto nos contactaremos contigo!' });
  });
});

app.post('/inscripcion', (req, res) => {
  const { Nombre ,Correo , solicitud } = req.body;
  const query = 'INSERT INTO docs (Nombre, Correo, solicitud) VALUES (?, ?, ?)';
  
  pool.query(query, [Nombre, Correo, solicitud], (err, result) => {
      if (err) {
          res.status(500).json({ mensaje: 'Error al guardar los datos' });
          return;
      }
      res.status(200).json({ mensaje: '¡Pronto nos contactaremos contigo!' });
  });
});


app.get('/api/sales', (req, res) => {
  queryDatabase('SELECT month_name, year, sales FROM sales_data', [], res);
});

app.get('/api/contacto', (req, res) => {
  const query = `SELECT Nombre, Telefono, Pais, Correo FROM contacto`;
  queryDatabase(query, [], res);
});

app.get('/api/docs', (req, res) => {
  const query = `SELECT Nombre, Correo, solicitud FROM docs`;
  queryDatabase(query, [], res);
});

app.get('/api/sugerencias', (req, res) => {
  const query = `SELECT Nombre, Correo, sugerencia FROM sugerencias`;
  queryDatabase(query, [], res);
});

app.get('/api/programas', (req, res) => {
  const query = `SELECT Nombre, Correo, Programa FROM programas`;
  queryDatabase(query, [], res);
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

app.get('/api/contacto', (req, res) => {
  queryDatabase('SELECT * FROM contacto', [], res);
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

app.delete('/api/gestion1/:id', (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM affiliates_data WHERE id = ?`;

  const params = [id];

  pool.query(query, params, (error, result) => {
    if (error) {
      console.error('Error de base de datos:', error);
      return res.status(500).json({ error: 'Error al eliminar afiliado' });
    }

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Afiliado eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Afiliado no encontrado' });
    }
  });
});

app.delete('/api/contacto/:Nombre', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM contactos WHERE Nombre = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting contact:', err);
      return res.status(500).json({ error: 'Error deleting contact' });
    }
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: 'Contact deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Contact not found' });
    }
  });
});

app.delete('/api/docs/:Nombre', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM documentos WHERE Nombre = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting document:', err);
      return res.status(500).json({ error: 'Error deleting document' });
    }
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: 'Document deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Document not found' });
    }
  });
});

app.delete('/api/sugerencias/:Nombre', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM sugerencias WHERE Nombre = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting suggestion:', err);
      return res.status(500).json({ error: 'Error deleting suggestion' });
    }
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: 'Suggestion deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Suggestion not found' });
    }
  });
});

app.delete('/api/programas/:Nombre', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM programas WHERE Nombre = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting program:', err);
      return res.status(500).json({ error: 'Error deleting program' });
    }
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: 'Program deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Program not found' });
    }
  });
});


app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
