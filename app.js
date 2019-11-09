var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var hbs = require('hbs');
var fs = require('fs');

app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs');

app.use(express.static('client'));

var controllers = require('./controllers');
controllers.set(app);

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
