var express = require('express');
var app = express();

var headers = require('./app/headers');

headers(app);

var listener = app.listen(process.env.PORT);