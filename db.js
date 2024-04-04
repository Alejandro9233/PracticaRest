const mysql = require('mysql2/promise');
require('dotenv').config(); // Ensure you have dotenv installed and required

// Use DATABASE_URL directly from .env
const pool = mysql.createPool(process.env.DATABASE_URL);

module.exports = pool;
