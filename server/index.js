var express = require('express');
var app = express();
var parser = require('body-parser');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('./public'));





var port = process.env.PORT || 3001;

app.listen(port, () => console.log("Connected on port 3001"));