// var mysql = require('mysql');
const { Client } = require('pg');

// var db = mysql.createConnection({
// 	multipleStatements: true,
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'photos'
// });

const db = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('connected to db');
});

// var getAllPicturesById = function(restaurant, cb) {
// 	db.query(`SELECT url, postdate, caption, user FROM pictures WHERE restaurant = ${restaurant}`, (err, result) => {
// 	  if(err) {
// 	  	cb(err);
// 	  }	else {
// 	  	cb(null, result);
// 	  }
// 	});
// }

// var getAllPicturesByName = function(restaurant, cb) {
// 	db.query(`SELECT url, postdate, caption, user FROM pictures WHERE restaurant IN ( SELECT id FROM restaurants WHERE name = '${restaurant}')`, (err, result) => {
// 	  if(err) {
// 	  	cb(err);
// 	  }	else {
// 	  	cb(null, result);
// 	  }
// 	});
// }

// var getAllUsers = function(users, cb) {
// 	db.query(`SELECT * FROM users where user_id in (${users})`, (err, result) => {
// 	  if(err) {
// 	  	cb(err);
// 	  }	else {
// 	  	cb(null, result);
// 	  }
// 	});
// }

// module.exports.getAllUsers = getAllUsers;
// module.exports.getAllPicturesByName = getAllPicturesByName;
// module.exports.getAllPicturesById = getAllPicturesById;
module.exports.db = db;