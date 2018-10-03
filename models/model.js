const connection = require('./../database/index.js');

exports.getAllPicturesById = function(restaurant, cb) {
  connection.db.query(`SELECT * FROM photos WHERE restaurant = ${restaurant}`, (err, result) => {
    if (err) {
      cb(err);
    }	else {
      cb(null, result);
    }
  });
};

exports.getAllPicturesByName = function(restaurant, cb) {
  connection.db.query(`SELECT * FROM photos WHERE restaurant IN ( SELECT id FROM restaurants WHERE name = '${restaurant}')`, (err, result) => {
    if (err) {	
      cb(err);
    }	else {
      cb(null, result);
    }
  });
};

exports.getAllUsers = function(users, cb) {
  connection.db.query(`SELECT * FROM users where id in (${users})`, (err, result) => {
    if (err) {
      cb(err);
    }	else {
      cb(null, result);
    }
  });
};
