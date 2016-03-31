#!/usr/bin/env node
var debug = require('debug')('thoughts:server');
var http = require('http');

var config = require('config');
var ServerConfig = config.get('SERVER_CONFIG');
var port = ServerConfig['PORT'];

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();
var server = http.createServer(app);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src')));
app.use('/', routes);

app.set('port', port);

server.listen(port);