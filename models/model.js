const connection = require('./../database/index.js');

exports.postPhoto = function(data, cb) {
  connection.db.query(`INSERT INTO photos (url, postdate, caption, "user", restaurant) VALUES ('${data.url}', '${data.postdate}', '${data.caption}', ${data.user}, ${data.restaurant})`, (err, result) => {
    if ( err ) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

exports.getAllPicturesById = function(restaurant, cb) {
  connection.db.query(`SELECT * FROM photos WHERE restaurant = ${restaurant}`, (err, result) => {
    if (err) {
      cb(err, null);
    }	else {
      cb(null, result);
    }
  });
};

exports.getAllPicturesByName = function(restaurant, cb) {
  connection.db.query(`SELECT * FROM photos WHERE restaurant IN ( SELECT id FROM restaurants WHERE name = '${restaurant}')`, (err, result) => {
    if (err) {	
      cb(err, null);
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
