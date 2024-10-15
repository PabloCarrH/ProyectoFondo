import express from 'express';
import cors from 'cors';
import mysql from 'mysql';


const app = express();
const PORT = 8810;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
