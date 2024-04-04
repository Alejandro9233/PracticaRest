const request = require('supertest');
const app = require('./app'); // Asegúrate de exportar tu aplicación Express en tu archivo principal

describe('GET /projects', () => {
  it('debería responder con un estado 200 y un JSON', async () => {
    const response = await request(app).get('/projects');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);

    // Imprime el cuerpo de la respuesta en la consola
    console.log('Respuesta del GET /projects:', response.body);

    // Aquí puedes añadir más expectativas sobre el contenido de la respuesta
    // Por ejemplo, verificar que la respuesta no esté vacía si esperas datos
    expect(response.body.length).toBeGreaterThan(0);
  });
});
