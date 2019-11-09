var game = require('./game');
var learn = require('./learn');
var home = require('./home');

module.exports.set = function(app, request) {

    app.get('/', home.displayHome);

    app.get('/learn', game.middleWare, learn.displayLearningMaterial);

    app.get('/play', game.middleWare,  game.startGame);

}