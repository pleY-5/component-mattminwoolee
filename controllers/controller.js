const db = require('./../models/model.js');

// Create and save a new data entry. 
exports.create = ( req, res ) => { 
  console.log('hi');
  // Create pseudo data entry
  var psuedoReqBody = { 
    url: 'Test_URL',
    postdate: 'Test_PostDate',
    caption: 'Test_Caption',
    user: req.params.user_id,
    restaurant: req.params.restaurant_id
  };
  db.postPhoto(psuedoReqBody, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

// Retrieve and return all data entry from the database
exports.findAll = (req, res) => {
  if (isNaN(parseInt(req.params.idOrName))) {
    db.getAllPicturesByName(req.params.idOrName, (err,data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  } else {
    db.getAllPicturesById(req.params.idOrName, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data); 		
      }
    });   
  }
};

// Retrieve and return all data entry from the database
exports.findAllUsers = (req, res) => {
  db.getAllUsers(req.query.users, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data); 		
    }
  });
}

// Find a single data entry with an ID
exports.findOne = (req, res) => {

};

// Update a data identified by the nodeID in the request
exports.update = (req, res) => {

};

// Delete a note with the specified ID in the request
exports.delete = (req, res) => {

};

