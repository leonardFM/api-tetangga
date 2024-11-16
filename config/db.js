require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Cek koneksi
db.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal:', err.message);
  } else {
    console.log('Terhubung ke database MySQL');
  }
});

module.exports = db;


