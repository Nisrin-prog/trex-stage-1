
var trex ,trex_running;
function preload(){

  trexImg = loadAnimation("trex1.png","trex3.png","trex4.png")
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,20)
  trex.addAnimation("Running",trexImg)
  trex.scale = 0.5
  
  edges = createEdgeSprites()
  console.log(edges)
}

function draw(){
  background(200)
  if(keyDown("space")){
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY+1
  trex.collide(edges[3])
  drawSprites()

}
