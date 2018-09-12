var express = require('express');
var app = express();
var parser = require('body-parser');
var db = require('../database/index.js');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('./public'));



app.get('/photos', (req, res) => {
  db.getAllPictures(req.query.id, (err, data) => {
  	if(err) {
  		res.send(err);
  	} else {
		  res.send(data); 		
  	}
  });
});

var port = process.env.PORT || 3001;

app.listen(port, () => console.log("Connected on port 3001"));

module.exports.app = app;