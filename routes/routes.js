module.exports = (app) => {
  const data = require('./../controllers/controller.js');

  // Create a new data entry for photos
  app.post('/api/photos/:user_id/:restaurant_id', data.create);

  // Retrieve all data entry from restaurants
  app.get('/api/photos/:idOrName/restaurants', data.findAll);

  // Retrieve all data entry from users
  app.get('/api/photos/:idOrName/users', data.findAllUsers);

  // Retrieve a single data entry with an Id
  app.get('/data/:noteId', data.findOne);

  // Update a data entry with an Id
  app.put('/data/:noteId', data.update);

  // Delete a data entry with an Id
  app.delete('/data/:noteId', data.delete);
};
