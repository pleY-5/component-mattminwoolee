const db = require('./../models/model.js');
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_REMOTE_PORT, process.env.REDIS_REMOTE_HOST);

// Create and save a new data entry. 
exports.create = ( req, res ) => { 
  db.postPhoto(req.body, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

// Retrieve and return all data entry from the database
exports.findAll = (req, res) => {
  const key = req.params.idOrName;
  if (isNaN(parseInt(req.params.idOrName))) {
    db.getAllPicturesByName(req.params.idOrName, (err,data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
        var stored = data;
        client.setex(req.params.idOrName, 100, JSON.stringify(stored));
      }
    });
  } else {
    // client.get(key, function (err, data) {
    //   if (data) {
    //     res.send(data);
    //   } else {
    db.getAllPicturesById(key, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);	
        var stored = data;
        client.setex(req.params.idOrName, 100, JSON.stringify(stored));
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
};

// Update a data identified by the nodeID in the request
exports.update = (req, res) => {

};

// Delete a note with the specified ID in the request
exports.delete = (req, res) => {

};

