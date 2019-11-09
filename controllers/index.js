var game = require('./game');
var learn = require('./learn');
var home = require('./home');

module.exports.set = function(app, request) {

    app.get('/', home.someMethod);

    app.get('/learn', learn.someMethod);

    app.get('/play', game.someMethod);

}