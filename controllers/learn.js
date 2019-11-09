

exports.middleWare = function(req, res, next){
    var body = fs.readFileSync("resources/information.txt")
    var obj = JSON.parse(body)
    res.locals.info = info
    next()
}

exports.displayLearningMaterial = function(req, res){

    res.render( "learningPage" , res.locals.info)
}