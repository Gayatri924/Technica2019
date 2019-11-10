var game = require('./play');
var learn = require('./learn');
var home = require('./home');

module.exports.set = function(app, request) {

    app.get('/', home.displayHome);

    app.get('/learn', learn.middleWare, learn.displayLearningMaterial);

    app.get('/play', game.middleWare,  game.startGame);

    app.get('/background_questions', game.middleWare, game.background_questions);

    app.get('/checkAnswer', game.middleWare, game.checkAnswer)

    app.get('/game_over', game.game_over)

}
