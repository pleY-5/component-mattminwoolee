require('dotenv').config();
require('newrelic');
var express = require('express');
var app = express();
var parser = require('body-parser');
var path = require('path');
// var cors = require('cors');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

/********* Loader.io *********/
app.get('/loaderio-2b1bab0fb8800e6ff1a3e9fa7593a4fb/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/loaderio-2b1bab0fb8800e6ff1a3e9fa7593a4fb.txt'));
});

app.use('/:idOrName', express.static('./public'));
/********* Redis Cache *********/
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_REMOTE_PORT, process.env.REDIS_REMOTE_HOST);

const cache = (req, res, next) => {
  const key = req.params.idOrName;
  client.get(key, function (err, data) {
    if (err) { throw err; }
    if (data) {
      res.send(data);
    } else {
      next();
    }
  });
};

// create middleware for redis cache
app.get('/api/photos/:idOrName/restaurants', cache);
require('./../routes/routes.js')(app);

/********* Server side rendering *********/
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from './../client/index.jsx';
// var Layout = require('./layout.js');

// var corsOptions = {
//   origin: 'http://localhost:3005',
//   optionsSuccessStatus: 200
// };




// Setting up server side rendering
// const renderComponents = (components, props = {}) => {

// };

// app.get('/:idOrName', (req, res) => {
//   let components = renderComponents(services, {id: req.params.id })
//   res.send(Layout(
//     'Yelp Photo Wheel',
//     App(...components),
//     Scripts(Object.keys(services))
//   ));  
// });

var port = process.env.PORT || 3001;
app.listen(port, () => console.log("Connected on port 3001"));

module.exports.app = app;