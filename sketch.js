var s1,s1Img,s2,s2Img;
var b1,b1Img,b1Group,b2,b2Img,b2Group,box1,box1Img,box2,box2Img;
var bg;
var fireSound;

var SERVE = 0;
var PLAY = 1;
var END = 2;
var gameState = SERVE;

function preload(){
  bg = loadImage("./assets/bg.png");
  s1Img = loadImage("./assets/soldier1.png");
  s2Img = loadImage("./assets/soldier2.png");
  box1Img = loadImage("./assets/box1.png");
  box2Img = loadImage("./assets/box2.png");
  b1Img = loadImage("./assets/bullet1.png");
  b2Img = loadImage("./assets/bullet2.png");
  fireSound = loadSound("./assets/fire.mp3");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  s1 = createSprite(60,height/2,10,10);
  s1.addImage(s1Img);
  s1.scale = 0.3;
  //s1.debug = true;
  s1.setCollider("circle",0,0,200);

  s2 = createSprite(width - 100,height/2,10,10);
  s2.addImage(s2Img);
  s2.scale = 0.3;
  //s2.debug = true;
  s2.setCollider("circle",0,0,200);

  box1 = createSprite(s1.x + 80,380,10,10);
  box1.addImage(box1Img);
  box1.scale = 0.3;

  box2 = createSprite(s2.x - 80,380,10,10);
  box2.addImage(box2Img);
  box2.scale = 0.3;



  b1Group = new Group();
  b2Group = new Group();
}

function draw(){
  background(bg);

  if(gameState == 1){    
    if (keyDown("space")) {
      shootS1Bullets();
      fireSound.play();
    } 

    if (keyDown("enter")) {
      shootS2Bullets();
      fireSound.play();
    }
  }
  drawSprites();
}

function shootS1Bullets(){
    b1 = createSprite(s1.x + 40,s1.y - 25,10,10);
    b1.addImage(b1Img);
    b1.scale = 0.03;
    b1.velocityX = 100;
    b1Group.add(b1);
    if (b1.x >= width) {
      b1.destroy();
    }
}

function shootS2Bullets(){
  b2 = createSprite(s2.x -40,s2.y - 25,10,10);
  b2.addImage(b2Img);
  b2.scale = 0.03;
  b2.velocityX = 100;
  b2Group.add(b2);
  if (b2.x <= width) {
    b2.destroy();
  }
}