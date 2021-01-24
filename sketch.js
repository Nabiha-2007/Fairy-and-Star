const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var fairy,fairyImage;
var back,backImage;
var star,starImage;
var fun;


function preload()
{
   //preload the images here
   backImage=loadImage("images/starnight.png")
   fairyImage=loadAnimation("images/fairy1.png","images/fairy2.png")
   starImage=loadImage("images/star.png");
   fun=loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 800);
  engine= Engine.create();
  world= engine.world;

  back=createSprite(400,400,800,800);
  back.addImage(backImage);
  back.scale=0.4;

  fairy=createSprite(100,500);
  fairy.addAnimation("moving",fairyImage);
  fairy.scale=0.2;
   
  star=createSprite(570,60,20,20);
  star.addImage(starImage);
  star.scale=0.2;

  //fairy.debug=true;
  fairy.setCollider ("rectangle",100,0,900,100)
  
 
  
}


function draw() {
  background("black");

star.x=star.position.x
star.y=star.position.y

if(star.isTouching(fairy)){
  star.velocityY=0;
}



  drawSprites();
}
 
function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===LEFT_ARROW){
   fairy.x=fairy.x-60;
 }

 if(keyCode===RIGHT_ARROW){
  fairy.x=fairy.x+60;
  fun.play();
}
if(keyCode===DOWN_ARROW){
  star.velocityY=5;
}
}
