var hypnoticBall, database;
var position;
var playerCount, gameState;
var playerName;
var gameObj,playerObj,formObj
var allPlayers
var cars, car1,car2,car3,car4
var car1img,car2img,car3img,car4img, trackImg

function preload(){
  car1img=loadImage("images/car1.png")
  car2img=loadImage("images/car2.png")
  car3img=loadImage("images/car3.png")
  car4img=loadImage("images/car4.png")
  trackImg=loadImage("images/track.jpg")
}
function setup(){
  playerCount=0
  gameState=0
  playerName=" ";
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-30,displayHeight-150);
  gameObj = new Game()
  gameObj.getGameState()
  gameObj.start()

 
}

function draw(){
  background("white");
  if(playerCount==4){
    gameObj.updateGameState(1)
  }
  if(gameState==1){
    gameObj.play()
  }
  if(gameState==2){
    formObj.addElement();
  }
  
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
