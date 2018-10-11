const connection = require('./../database/index.js');

exports.postPhoto = function(data, cb) {
  connection.db.query(`INSERT INTO pictures (url, postdate, caption, "user", restaurant) VALUES ('${data.url}', '${data.postdate}', '${data.caption}', ${data.user}, ${data.restaurant})`, (err, result) => {
    if ( err ) {
      cb(err, null);
    } else {
      cb(null, result);
    }
  });
};

exports.getAllPicturesById = function(restaurant, cb) {
  connection.db.query(`SELECT * FROM pictures WHERE restaurant = ${restaurant}`, (err, result) => {
    if ( err) {
      cb(err, null);
    }	else {
      cb(null, result);
    }
  });
};

exports.getAllPicturesByName = function(restaurant, cb) {
  // convert lowercase restaurant name to uppercase
  var newStrArr = restaurant.split('');
  newStrArr[0] = newStrArr[0].toUpperCase();
  newStrArr[2] = newStrArr[2].toUpperCase();
  var newStr = newStrArr.join('');
  connection.db.query(`SELECT * FROM pictures WHERE restaurant IN ( SELECT id FROM restaurants WHERE name = '${newStr}')`, (err, result) => {
    if (err) {	
      cb(err, null);
    }	else {
      cb(null, result);
    }
  });
};

exports.getAllUsers = function(users, cb) {
  connection.db.query(`SELECT * FROM users where user_id in (${users})`, (err, result) => {
    if (err) {
      cb(err);
    }	else {
      cb(null, result);
    }
  });
};
