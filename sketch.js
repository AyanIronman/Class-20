var fixed,moving;
function setup() {
  createCanvas(800,400);
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="red"
  fixed=createSprite(600, 200, 50, 50);
  fixed.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if(moving.x-fixed.x<moving.width/2+fixed.width/2
    &&fixed.x-moving.x<moving.width/2+fixed.width/2
    &&moving.y-fixed.y<moving.height/2+fixed.height/2
    &&fixed.y-moving.y<moving.height/2+fixed.height/2){
    moving.shapeColor="cyan";
    fixed.shapeColor="cyan";
  }
  else{
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }
  
    drawSprites();
}