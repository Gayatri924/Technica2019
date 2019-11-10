var Carmen;
var speed = 5;
var interval = setInterval(updateGameArea, speed); // speed
var carmenMover;

function startGame() {
  myGameArea.start();
  Carmen = new component(20, 20, "images/main_character_1.png", 10, 290);
  Person1 = new component(20, 20, "images/random citizen one.png", 450, 10);
  Person2 = new component(20, 20, "images/random citizen two.png", 800, 10);
  Person3 = new component(20, 20, "images/random citizen three.png", 1400, 290);
  Background = new component(1600, 600, "images/level_one_bg.png", 0, 0);
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
  canvas : document.getElementById("canva"),
  start : function() {
    this.canvas.width = 1600;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
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

document.getElementById("go").addEventListener("mousedown", startMoving);

function startMoving(){
  console.log("Move");
  carmenMover = setInterval(moveCarmen, 1);
}

function moveCarmen(){
  Carmen.x += 1;
  boardUpdate();
}

document.getElementById("go").addEventListener("mouseup", stopMoving);

function stopMoving(){
  clearInterval(carmenMover);
}

var change = 1;

function boardUpdate(){
  myGameArea.clear();
  Background.update();
  Person1.update();
  Person2.update();
  Carmen.update();
  Person3.update();
}

function updateGameArea() {
  if(Person1.y >= 450 || Person1.y < 10){
    change *= -1;
  }
  Person1.y += change;
  Person2.y += change;
  boardUpdate();
  checkCollisions();
}
var check3 = false;
var check2 = false;
var check1 = false;

function checkCollisions(){
  if(Math.abs(Carmen.x - Person3.x) < 50 && !check3){
    console.log(check3);
    clearInterval(interval);
    check3 = true;
    stopMoving();
    document.getElementById("go").removeEventListener("mousedown", startMoving);
    fetchFromServer(3);
  }
  if(Math.abs(Carmen.x - Person2.x) < 50 && Math.abs(Carmen.y - Person2.y) < 100 && !check2){
    console.log(check3);
    clearInterval(interval);
    check2 = true;
    stopMoving();
    document.getElementById("go").removeEventListener("mousedown", startMoving);
    fetchFromServer(2);
  }
  if(Math.abs(Carmen.x - Person1.x) < 50 && Math.abs(Carmen.y - Person1.y) < 100 && !check1){
    console.log(check3);
    clearInterval(interval);
    check1 = true;
    stopMoving();
    document.getElementById("go").removeEventListener("mousedown", startMoving);
    fetchFromServer(1);
  }
  if(Carmen.x >= 1500){
    clearInterval(interval);
    stopMoving();
    document.getElementById("go").removeEventListener("mousedown", startMoving);
    endGame()
  }
}
var numQ = 0;

function fetchFromServer(number) {
    numQ = number
    var ajax_params = {
        'url'     : "http://3.226.240.138/background_questions",
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
        'url'     : "http://3.226.240.138/checkAnswer",
        'type'    : "get",
        'data'    : {'ans' : chosenAnswer, 'QuestionNum' : numQ},
        'success' : correctFunction
    }
    console.log(ajax_params)
    $.ajax( ajax_params )
}

function correctFunction(responseObject) {
    document.getElementById("question").innerHTML = responseObject;
    var state = document.getElementById("validity").innerHTML;
    console.log(state);
    if(state == "false"){
      Carmen.x = 10;
      check3 = false;
      check2 = false;
      check1 = false;
    }
    interval = setInterval(updateGameArea, speed);
    document.getElementById("go").addEventListener("mousedown", startMoving);
}

function endGame(){
    window.location.href = '/level2';
}
