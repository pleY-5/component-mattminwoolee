module.exports = (app) => {
  const data = require('../controllers/controller.js');

  // Create a new Note
  app.post('/data', data.create);

  // Retrieve all data
  app.get('/data', data.findAll);

  // Retrieve a single Note with noteId
  app.get('/data/:noteId', data.findOne);

  // Update a Note with noteId
  app.put('/data/:noteId', data.update);

  // Delete a Note with noteId
  app.delete('/data/:noteId', data.delete);
}