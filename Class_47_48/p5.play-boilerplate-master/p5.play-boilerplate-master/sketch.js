var ball,ball1,ball2,cup,cup1,cup2,Player,position,position1,position2,database;
var cb1,cb2,cb3,cb4,cb5,cb6,cb7,cb8,cb9,cb10,cb11,cb12,cb13,cb14,cb15,cb16,cb17,cb18,cb19,cb20,cb21,cb22;
var resetb;


function setup() {
  createCanvas(400,400);
  database = firebase.database();
  ball = createSprite(20, 25, 18, 18);
  ball1 = createSprite(20, 25, 18, 18);
  ball2 = createSprite(20, 25, 18, 18);
  cb1 = createSprite(0, 60, 190, 18);
  cb2 = createSprite(50, 137, 18, 138);
  cb3 = createSprite(150, 0, 18, 250);
  cb4 = createSprite(200, 80, 100, 18);
  cb5 = createSprite(130, 175, 150, 18);
  cb6 = createSprite(125, 240, 115, 18);
  cb7 = createSprite(176, 293.5, 18, 125);
  cb8 = createSprite(9, 320, 18, 200);
  cb9 = createSprite(10, 320, 220, 18);
  cb10 = createSprite(270, 275, 100, 18);
  cb11 = createSprite(270, 340, 18, 132);
  cb12 = createSprite(100, 220, 18, 100);
  cb13 = createSprite(350, 50, 100, 18);
  cb14 = createSprite(245, 31, 105, 18);
  cb15 = createSprite(215, 391, 100, 18);
  cb16 = createSprite(255, 150, 18, 90);
  cb17 = createSprite(321, 100, 150, 18);
  cb18 = createSprite(1, 125, 30, 25);
  cb19 = createSprite(150, 210, 100, 18);
  cb20 = createSprite(320, 390, 18, 115);
  cb21 = createSprite(391, 240, 18, 50);
  cb22 = createSprite(110, 390, 18, 90);
  cup = createSprite(390, 390, 15, 100);
  cup1 = createSprite(390, 390, 15, 100);
  cup2 = createSprite(390, 390, 15, 100);
 
  var playerPos = database.ref("Players/Player1/Position")
  playerPos.on("value",readPosition)

  var playerPos1 = database.ref("Players/Player2/Position")
  playerPos1.on("value",readPosition1)

  var playerPos2 = database.ref("Players/Player3/Position")
  playerPos2.on("value",readPosition2)






 ball.shapeColor = ("white");
 ball1.shapeColor = ("pink");
 ball2.shapeColor = ("black");
 cup.shapeColor = ("pink");
 cup1.shapeColor = ("pink");
 cup2.shapeColor = ("pink");
 cb1.shapeColor = ("aqua");
 cb2.shapeColor = ("aqua");
 cb3.shapeColor = ("aqua");
 cb4.shapeColor = ("aqua");
 cb5.shapeColor = ("aqua");
 cb6.shapeColor = ("aqua");
 cb7.shapeColor = ("aqua");
 cb8.shapeColor = ("aqua");
 cb9.shapeColor = ("aqua");
 cb10.shapeColor = ("aqua");
 cb11.shapeColor = ("aqua");
 cb12.shapeColor = ("aqua");
 cb13.shapeColor = ("aqua");
 cb14.shapeColor = ("aqua");
 cb15.shapeColor = ("aqua");
 cb16.shapeColor = ("aqua");
 cb17.shapeColor = ("aqua");
 cb18.shapeColor = ("aqua");
 cb19.shapeColor = ("aqua");
 cb20.shapeColor = ("aqua");
 cb21.shapeColor = ("aqua");
 cb22.shapeColor = ("aqua");
 

 resetb = createButton("reset")
 resetb.x = 450;
 resetb.y = 200;

 resetb.mousePressed(()=>{
 rdata();

 })
}

function draw() {
  background("red");  
 
//ball1
  if(keyDown("UP_ARROW")) {
    writePosition(0,-5);
  }
  
  if (keyDown("DOWN_ARROW")) {
    writePosition(0,5);
  }
  
  if (keyDown("LEFT_ARROW")) {
   writePosition(-5,0); 
  }
  
  if (keyDown("RIGHT_ARROW")) {
    writePosition(5,0)
  }
//ball2
  if(keyDown("W")) {
    writePosition1(0,-5);
  }
  
  if (keyDown("S")) {
    writePosition1(0,5);
  }
  
  if (keyDown("A")) {
   writePosition1(-5,0); 
  }
  
  if (keyDown("D")) {
    writePosition1(5,0)
  }
//ball3
  if(keyDown("Y")) {
    writePosition2(0,-5);
  }
  
  if (keyDown("H")) {
    writePosition2(0,5);
  }
  
  if (keyDown("G")) {
   writePosition2(-5,0); 
  }
  
  if (keyDown("J")) {
    writePosition2(5,0)
  }

  if (ball.isTouching(cb1) || ball.isTouching(cb2) || ball.isTouching(cb3) || ball.isTouching(cb4) || ball.isTouching(cb5) || ball.isTouching(cb6) || ball.isTouching(cb7) || ball.isTouching(cb8) || ball.isTouching(cb9) || ball.isTouching(cb10) || ball.isTouching(cb11) || ball.isTouching(cb12) || ball.isTouching(cb13) || ball.isTouching(cb14) || ball.isTouching(cb15) || ball.isTouching(cb16) || ball.isTouching(cb17) || ball.isTouching(cb18) || ball.isTouching(cb19) || ball.isTouching(cb20) || ball.isTouching(cb21) || ball.isTouching(cb22)) {
    ball.x = 20;
    ball.y = 25;
    //ball.velocityX = 0;
    //ball.velocityY = 0;
    reset();
  }

  if (ball1.isTouching(cb1) || ball1.isTouching(cb2) || ball1.isTouching(cb3) || ball1.isTouching(cb4) || ball1.isTouching(cb5) || ball1.isTouching(cb6) || ball1.isTouching(cb7) || ball1.isTouching(cb8) || ball1.isTouching(cb9) || ball1.isTouching(cb10) || ball1.isTouching(cb11) || ball1.isTouching(cb12) || ball1.isTouching(cb13) || ball1.isTouching(cb14) || ball1.isTouching(cb15) || ball1.isTouching(cb16) || ball1.isTouching(cb17) || ball1.isTouching(cb18) || ball1.isTouching(cb19) || ball1.isTouching(cb20) || ball1.isTouching(cb21) || ball1.isTouching(cb22)) {
    ball1.x = 20;
    ball1.y = 25;
   // ball1.velocityX = 0;
    //ball1.velocityY = 0;
    reset1();
  }

  if (ball2.isTouching(cb1) || ball2.isTouching(cb2) || ball2.isTouching(cb3) || ball2.isTouching(cb4) || ball2.isTouching(cb5) || ball2.isTouching(cb6) || ball2.isTouching(cb7) || ball2.isTouching(cb8) || ball2.isTouching(cb9) || ball2.isTouching(cb10) || ball2.isTouching(cb11) || ball2.isTouching(cb12) || ball2.isTouching(cb13) || ball2.isTouching(cb14) || ball2.isTouching(cb15) || ball2.isTouching(cb16) || ball2.isTouching(cb17) || ball2.isTouching(cb18) || ball2.isTouching(cb19) || ball2.isTouching(cb20) || ball2.isTouching(cb21) || ball2.isTouching(cb22)) {
    ball2.x = 20;
    ball2.y = 25;
   // ball2.velocityX = 0;
   // ball2.velocityY = 0;
    reset2();
  }   

  if(ball.isTouching(cup)){
    cup1.destroy();
    cup2.destroy();
    ball1.destroy();
    ball2.destroy();
    console.log("Player 1 Wins")
  }

  if(ball1.isTouching(cup1)){
    cup.destroy();
    cup2.destroy();
    ball.destroy();
    ball2.destroy();
    console.log("Player 2 Wins")
  }

  if(ball2.isTouching(cup2)){
    cup1.destroy();
    cup.destroy();
    ball1.destroy();
    ball.destroy();
    console.log("Player 3 Wins")
  }

ball.display();
cb1.display();
cb2.display();
cb3.display();
cb4.display();
cb5.display();
cb6.display();
cb7.display();
cb8.display();
cb9.display();
cb10.display();
cb11.display();
cb12.display();
cb13.display();
cb14.display();
cb15.display();
cb16.display();
cb17.display();
cb18.display();
cb19.display();
cb20.display();
cb21.display();
cb22.display();
cup.display();

ball.collide(cb1);
ball.collide(cb2);
ball.collide(cb3);
ball.collide(cb4);
ball.collide(cb5);
ball.collide(cb6);
ball.collide(cb7);
ball.collide(cb8);
ball.collide(cb9);
ball.collide(cb10);
ball.collide(cb11);
ball.collide(cb12);
ball.collide(cb13);
ball.collide(cb14);
ball.collide(cb15);
ball.collide(cb16);
ball.collide(cb17);
ball.collide(cb18);
ball.collide(cb19);
ball.collide(cb20);
ball.collide(cb21);
ball.collide(cb22);
//mousePressed();
drawSprites();
}

function readPosition(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}

function readPosition1(data){
position1 = data.val();
ball1.x = position1.x;
ball1.y = position1.y;
}

function readPosition2(data){
position2 = data.val();
ball2.x = position2.x;
ball2.y = position2.y;
}

function writePosition(x,y){
  database.ref("Players/Player1/Position").set({
    "x" : position.x + x,
    "y" : position.y + y
  })
}

function writePosition1(x,y){
  database.ref("Players/Player2/Position").set({
    "x" : position1.x + x,
    "y" : position1.y + y
  })
}

function writePosition2(x,y){
  database.ref("Players/Player3/Position").set({
    "x" : position2.x + x,
    "y" : position2.y + y
  })
}

function reset(x,y){
  database.ref("Players/Player1/Position").set({

  "x" : 20,
  "y" : 25

  })
}

function reset1(x,y){
  database.ref("Players/Player2/Position").set({

  "x" : 20,
  "y" : 25

  })
}

function reset2(x,y){
  database.ref("Players/Player3/Position").set({

  "x" : 20,
  "y" : 25

  })
}

function rdata(){
// resetb = createButton("reset")
 //resetb.x = 450;
 //resetb.y = 200;
 database.ref("Players/Player1/Position").set({
   x : 20,
   y : 25
 })

 database.ref("Players/Player2/Position").set({
  x : 20,
  y : 25
 })


database.ref("Players/Player3/Position").set({
  x : 20,
  y : 25
 })
}

/*function mousePressed(resetb){
  database.ref("Players/Player1/Position").set({
    x : 20,
    y : 25
  })
}*/

