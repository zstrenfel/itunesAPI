// ==============================
// server.js
// ==============================

// modules ----------------------
var express             = require('express');
var path                = require('path');
var cors                = require('express-cors');

// Environment ------------------
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 8000;

// Express Setup ----------------
var express = require('express');
var app = require('express')();
var server = require('http').createServer(app);

server.listen(port);

//allows CORs
app.use(cors({
  allowedOrigins: [
    '*.apple.com'
  ]
}));

// Static files -----------------
app.use(express.static(__dirname + '/production'));

// Routes -----------------------
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './production', 'index.html'));
});

// Launch app -------------------
//app.listen(port);

//app.listen(port, '10.134.0.227');
console.log("*** server running");
exports = module.exports = app;
