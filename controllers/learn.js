var fs = require('fs');

exports.middleWare = function(req, res, next){
    console.log("hello")
    var body = fs.readFileSync("resources/information.txt").toString('utf-8');

    console.log(body)
    var info = JSON.parse(body);
    console.log("hello2")
    console.log(info);
    res.locals.info = info;
    console.log(info);
    //res.locals.info = {"hello":"hi"};
    next();
}

exports.displayLearningMaterial = function(req, res){

    res.send(res.locals.info)
}