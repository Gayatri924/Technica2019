
var fs = require('fs');

exports.middleWare = function(req, res, next){
    var body = fs.readFileSync("resources/questions.txt")
    var obj = JSON.parse(body)
    res.locals.obj = obj
    next()
}

exports.startGame = function(req, res){

    res.render( "level1" , res.locals.obj)
}