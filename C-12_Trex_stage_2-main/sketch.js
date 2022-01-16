var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimage= loadImage("cloud.png")
  groundImage = loadImage("ground2.png");
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //set background color
  background("white");
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 161        ) {
    trex.velocityY = -10;
  }
  console.log(trex.y)

  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  createcloud()
  drawSprites();
  
}

function createcloud() {

  if (frameCount % 100===0){
    cloud = createSprite(600,80,40,10)
    cloud.addImage(cloudimage)
    cloud.velocityX = -3
    cloud.y = Math.round(random(40,80))
    cloud.scale= .9
}

}

