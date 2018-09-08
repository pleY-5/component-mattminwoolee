var express = require('express');
var app = express();
var parser = require('body-parser');
var db = require('../database/index.js');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('./public'));



app.post('/photos', (req, res) => {
  console.log(req.body.result);
  db.getAllPictures(req.body.result, (data) => {
	  res.send(data);
  });
});

var port = process.env.PORT || 3001;

app.listen(port, () => console.log("Connected on port 3001"));