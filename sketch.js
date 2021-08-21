var garden,rabbit;
var gardenImg,rabbitImg;
var apples, Apple
var leaf
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  Apple= loadImage("apple.png");
  Leave= loadImage("leaf.png")
  OrangeLeaf= loadImage("orangeLeaf.png");
  Grass= loadImage("grass.png");
  redImage= loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}








function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var number= Math.round(random(1,3))
  if(frameCount%80===0){
    if(number===1){
      createapples();
    
    }
    else if(number===2){
      createorange();
    }
    else {
      createRed();
    }
  }

  drawSprites();
}
function createapples(){
  apples=createSprite(random(50,350),40,10,10);
  apples.addImage(Apple)
  apples.scale=0.08
  apples.velocityY=3
  apples.lifetime=50

}
function createorange(){
  orange=createSprite(random(50,350),40,10,10);
  orange.addImage(OrangeLeaf);
  orange.scale=0.08
  orange.velocityY=3
  orange.lifetime=50
}
function createRed(){
  Red=createSprite(random(50.350),40,10,10);
  Red.addImage(redImage);
  Red.scale=0.08
  Red.velocityY=3
  Red.lifetime=50
}