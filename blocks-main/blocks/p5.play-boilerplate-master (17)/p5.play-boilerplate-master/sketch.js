var box1,box;
var ground
var boxGroup
var score;
var boxArray = [];
var bgImage
function preload() {
  bgImage = loadImage("stacksBg.jpeg")
}
function setup()
 {
    createCanvas(displayWidth,displayHeight);

    ground=createSprite(displayWidth/2, displayHeight-20, displayWidth, 5);
    ground.visible = false;

    box1=createSprite(displayWidth/2,displayHeight-20,150,80)
    box1.shapeColor="purple"
    boxGroup=createGroup();
    score = 0;
    
}

function draw() 
{
  background(bgImage); 
  textSize(30);
  fill("black");
  text("SCORE: "+ score,displayWidth-200,50)
  box1.collide(ground)
  boxGroup.collide(ground)
  boxGroup.collide(box1);
 // boxGroup.collide(boxGroup)
  
 boxes();
  if(keyDown("d")){
    box.velocityX=0;
    box.velocityY=10;
    
  }
  if(boxGroup.isTouching(box)){
    boxGroup.setVelocityYEach(0)
  }
  if(boxGroup.x>1000){
    boxGroup.x=0;
    
  }
  
  drawSprites();
}
function boxes(){
 if(frameCount%150===0)
  {
    box=createSprite(0,100,150,80);
    box.shapeColor=rgb(random(0,255),random(0,255),random(0,255))
    //box.debug=true;
    box.velocityX=10;
    boxGroup.add(box)
    boxArray.push(box);
    console.log(boxArray.length)
    console.log(boxArray);
    //box.y=boxGroup.y-100;
    
  }
 
}