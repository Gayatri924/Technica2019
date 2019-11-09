var game = require('./play');
var learn = require('./learn');
var home = require('./home');

module.exports.set = function(app, request) {

    app.get('/', home.displayHome);

    app.get('/learn', learn.middleWare, learn.displayLearningMaterial);

    app.get('/play', game.middleWare,  game.startGame);

}
