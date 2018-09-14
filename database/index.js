var mysql = require('mysql');


var db = mysql.createConnection({
	multipleStatements: true,
  host: 'localhost',
  user: 'root',
  password: 'nick',
  database: 'photos'
});


db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('connected to db');
});

var getAllPictures = function(restaurant, cb) {
	db.query(`SELECT url, postdate, caption, user FROM pictures where restaurant = ${restaurant}`, (err, result) => {
	  if(err) {
	  	cb(err);
	  }	else {
	  	cb(null, result);
	  }
	});
}

var getAllUsers = function(users, cb) {
	db.query(`SELECT * FROM users where user_id in (${users})`, (err, result) => {
	  if(err) {
	  	cb(err);
	  }	else {
	  	cb(null, result);
	  }
	});
}

module.exports.getAllUsers = getAllUsers;
module.exports.getAllPictures = getAllPictures;
module.exports.db = db;