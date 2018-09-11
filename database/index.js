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
	db.query(`SELECT url FROM pictures where restaurant = ${restaurant}`, (err, result) => {
	  if(err) {
	  	console.log(err);
	  }	else {
	  	cb(result);
	  }
	});
}


module.exports.getAllPictures = getAllPictures;
module.exports.db = db;