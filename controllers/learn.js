var fs = require('fs');

exports.middleWare = function(req, res, next){
    var body = fs.readFileSync("resources/information.txt").toString('utf-8');

    console.log(body)
    var info = JSON.parse(body);

    res.locals.info = info;

    next();
}

exports.displayLearningMaterial = function(req, res){
    console.log(res.locals.info);
    res.render("informationDisplay",res.locals.info)
}