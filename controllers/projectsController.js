// controllers/projectsController.js
const db = require('../db'); // Asegúrate de ajustar la ruta según sea necesario

// CREATE - Agregar un nuevo proyecto
exports.createProject = async (req, res) => {
  const { tittle, location, birthday, author, app_link, github_profile } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO projects (tittle, location, birthday, author, app_link, github_profile) VALUES (?, ?, ?, ?, ?, ?)',
      [tittle, location, birthday, author, app_link, github_profile]
    );
    res.status(201).send(`Project added with ID: ${result[0].insertId}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// READ - Obtener todos los proyectos
exports.getAllProjects = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM projects');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// UPDATE - Actualizar un proyecto
exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { tittle, location, birthday, author, app_link, github_profile } = req.body;
  try {
    await db.query(
      'UPDATE projects SET tittle = ?, location = ?, birthday = ?, author = ?, app_link = ?, github_profile = ? WHERE id = ?',
      [tittle, location, birthday, author, app_link, github_profile, id]
    );
    res.status(200).send(`Project updated with ID: ${id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// DELETE - Eliminar un proyecto
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM projects WHERE id = ?', [id]);
    res.status(200).send(`Project deleted with ID: ${id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
