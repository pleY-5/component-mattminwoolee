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
	db.query(`SELECT url, postdate, caption FROM pictures where restaurant = ${restaurant}`, (err, result) => {
	  if(err) {
	  	cb(err);
	  }	else {
	  	cb(null, result);
	  }
	});
}


module.exports.getAllPictures = getAllPictures;
module.exports.db = db;