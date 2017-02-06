'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('target/webapp'));
// app.get('/', function(req, res) {
//     res.sendfile('./public/index.html');
// });

app.listen(5000, function() {
	console.log('Listening on 5000')
});