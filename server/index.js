require('dotenv').config();
require('newrelic');
var express = require('express');
var app = express();
var path = require('path');
var parser = require('body-parser');
var db = require('../database/index.js');
var cors = require('cors');

const redis = require('redis');
const REDIS_PORT = process.env.REDIS_PORT;
const client = redis.createClient(REDIS_PORT);

// client.setex('some key', 3600, 'some value');
const cache = (req, res, next) => {
  const key = req.params.idOrName;
  client.get(key, function (err, data) {
    if (err) throw err;

    if (data != null) {
      res.send( data);
    } else {
      next();
    }
  });
};
// create middleware for redis cache
app.get('/api/photos/:idOrName/restaurants', cache);

// for loader.io
// app.get('/loaderio-84dba0cf73601048ce62c9fe6114c0f8', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../public/loaderio-84dba0cf73601048ce62c9fe6114c0f8.txt'));
// });

// var corsOptions = {
//   origin: 'http://localhost:3005',
//   optionsSuccessStatus: 200
// };

app.use(parser.json());
// app.use(parser.urlencoded({ extended: true }));
app.use('/:idOrName', express.static('./public'));
require('./../routes/routes.js')(app);

var port = process.env.PORT || 3001;
app.listen(port, () => console.log("Connected on port 3001"));

module.exports.app = app;