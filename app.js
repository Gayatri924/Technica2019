//Page is --> http://127.0.0.1:8080/

// -------------- load packages -------------- //
// INITIALIZATION STUFF

var express = require('express')
var app = express();
var path = require('path');
var request = require('request');
var hbs = require('hbs');

// -------------- express initialization -------------- //
// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM

app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs');

//link files

// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

var controllers = require('./controllers');
controllers.set(app, request);

// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});