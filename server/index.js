require('dotenv').config();
var express = require('express');
var app = express();
var parser = require('body-parser');
// var cors = require('cors');
app.use('/:idOrName', express.static('./public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));


/** Redis Cache **/
// const redis = require('redis');
// const client = redis.createClient(process.env.REDIS_REMOTE_PORT, process.env.REDIS_REMOTE_HOST);

// const cache = (req, res, next) => {
//   const key = req.params.idOrName;
//   client.get(key, function (err, data) {
//     if (err) { throw err; }
//     if (data) {
//       res.send(data);
//     } else {
//       next();
//     }
//   });
// };

// create middleware for redis cache
// app.get('/api/photos/:idOrName/restaurants', cache);
require('./../routes/routes.js')(app);

/** Server side rendering **/
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import App from './../client/index.jsx';
// var Layout = require('./layout.js');

// for loader.io
// app.get('/loaderio-84dba0cf73601048ce62c9fe6114c0f8', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../public/loaderio-84dba0cf73601048ce62c9fe6114c0f8.txt'));
// });

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