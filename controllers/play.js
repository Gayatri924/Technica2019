
var fs = require('fs');

exports.middleWare = function(req, res, next){
    var body = fs.readFileSync("resources/questions.txt").toString('utf-8')
    var obj = JSON.parse(body)
    res.locals.obj = obj
    next()
}

exports.startGame = function(req, res){
    res.render( "IntroGame");
}

exports.level1 = function(req, res){
  res.render("level1", res.locals.obj);
}

exports.level2 = function(req, res){
  res.render("level2", res.locals.obj);
}

exports.level3 = function(req, res){
  res.render("level3", res.locals.obj);
}

exports.background_questions = function(req, res){
  var num = req.query.num;
  questionAnswerObj = res.locals.obj[num]
  res.render('questions', {'responseObject': questionAnswerObj})
}

exports.checkAnswer = function(req, res){
    var ans = req.query.ans;
    var numQ = req.query.QuestionNum;
    answer = "option="+res.locals.obj[numQ].theAnswer
    console.log(answer)
    var returnBool = false
    if (ans == answer){
        returnBool = true
    }
    res.render('result', {'responseObject' : returnBool})

}

exports.game_over = function(req, res){
    res.render('end', {'responseObject': ''})
}
