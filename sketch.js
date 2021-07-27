var ship, shipmoving;
var sea, seaImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipmoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);


  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale = 0.25;

  ship = createSprite(150,275 );
  ship.addAnimation("ShipMoving", shipmoving);
  ship.scale = 0.2;

}

function draw() {
  background(0);

  sea.velocityX = -4;

  if(sea.x<0) {
    sea.x = width/2;
  }

  createEdgeSprites();
  drawSprites();
}