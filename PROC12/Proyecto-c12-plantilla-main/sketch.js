var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
 
}

function setup(){
  
  createCanvas(400,400);

path = createSprite(200,200,100,100);
path.addImage("fondo", pathImg);
path.scale=1.2;

boy = createSprite(150,150);
boy.addAnimation("string", boyImg);
boy.scale=1;
  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
 if(keyDown("right_arrow")) {
   boy.velocityX = 10;
 }

  if (keyDown("left_arrow")) {
 boy.velocityX = -10;   
  }

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
