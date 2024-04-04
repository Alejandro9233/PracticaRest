const pool = require('./db'); // Asegúrate de que la ruta al archivo db.js sea correcta

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT NOW() as currentTime');
    console.log('La hora actual del servidor de la base de datos es:', rows[0].currentTime);
    // Cierra la conexión de la pool cuando ya no es necesaria
    await pool.end();
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
  }
}

testConnection();
