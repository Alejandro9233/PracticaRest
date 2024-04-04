const express = require('express');
const app = express();
const projectsController = require('./controllers/projectsController');

app.use(express.json());

app.get('/', (req, res) => res.send('API Root'));
app.get('/marco', (req, res) => res.send('Polo'));
app.get('/ping', (req, res) => res.send('pong'));
app.get('/items', (req, res) => res.send('List of items'));

// Usar los controladores en las rutas
app.post('/projects', projectsController.createProject);
app.get('/projects', projectsController.getAllProjects);
app.put('/projects/:id', projectsController.updateProject);
app.delete('/projects/:id', projectsController.deleteProject);

module.exports = app;
