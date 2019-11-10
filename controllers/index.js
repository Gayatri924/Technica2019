var game = require('./play');
var learn = require('./learn');
var home = require('./home');

module.exports.set = function(app, request) {

    app.get('/', home.displayHome);

    app.get('/learn', learn.middleWare, learn.displayLearningMaterial);

    app.get('/play', game.startGame);

    app.get('/level1', game.middleWare, game.level1);

    app.get('/level2', game.middleWare, game.level2);

    app.get('/level3', game.middleWare, game.level3);

    app.get('/background_questions', game.middleWare, game.background_questions);

    app.get('/checkAnswer', game.middleWare, game.checkAnswer)

    app.get('/game_over', game.game_over)

}
