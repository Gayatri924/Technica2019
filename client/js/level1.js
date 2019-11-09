var Carmen;
var CarmenY = 20;
var CarmenX = 20;
var ctx;

function startGame() {
  Game.start();
  ctx = Game.context;
  Carmen = new Image();
  Carmen.addEventListener('load', function() {
    ctx.drawImage(Carmen, CarmenX, CarmenY);
  }, false);
  Carmen.src = "images/main_character_1.png";
}

var Game = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 1400;
    this.canvas.height = 700;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateBoard, 20);
  }
}

function updateBoard(){
  ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
  CarmenX += 1;
  ctx.drawImage(Carmen, CarmenX, CarmenY);
}
