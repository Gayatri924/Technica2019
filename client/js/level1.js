var Carmen;
var interval = setInterval(updateGameArea, 5); // speed

function startGame() {
  myGameArea.start();
  Carmen = new component(30, 30, "images/main_character_1.png", 10, 250);
  Person1 = new component(30, 30, "images/random citizen one.png", 600, 10);
  Person2 = new component(30, 30, "images/random citizen two.png", 1200, 10);
  Person3 = new component(30, 30, "images/random citizen three.png", 1600, 250);
}

function component(width, height, src, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = myGameArea.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 1800;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function component(width, height, source, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.image = new Image();
  this.image.src = source;
  this.update = function(){
    ctx = myGameArea.context;
    ctx.drawImage(this.image, this.x, this.y);
  }
}

var change = 1;

function updateGameArea() {
  myGameArea.clear();
  Carmen.x += 1;
  if(Person1.y >= 450 || Person1.y < 10){
    change *= -1;
  }
  Person1.y += change;
  Person2.y += change;
  console.log(Person1.y);
  Carmen.update();
  Person1.update();
  Person2.update();
  Person3.update();
  checkCollisions();
}

function checkCollisions(){
  if(Math.abs(Carmen.x - Person3.x) < 50){
    clearInterval(interval);
    console.log("Hi I'm Here!!!")
    fetchFromServer(3);

  }
}
var numQ = 0;

function fetchFromServer(number) {
    numQ = number
    var ajax_params = {
        'url'     : "http://localhost:8080/background_questions",
        'type'    : "get",
        'data'    : {'num': number},
        'success' : onServerResponse
    }

    $.ajax( ajax_params)
}
function onServerResponse(responseText) {
    document.getElementById('question').innerHTML = responseText;
}

function chooseAnswer(){
    var chosenAnswer = $("#the_form").serialize();
    var ajax_params = {
        'url'     : "http://localhost:8080/checkAnswer",
        'type'    : "get",
        'data'    : {'ans' : chosenAnswer, 'QuestionNum' : numQ},
        'success' : correctFunction
    }
    console.log(ajax_params)
    $.ajax( ajax_params )
}

function correctFunction(responseObject) {
    document.getElementById("question").innerHTML = responseObject
}
