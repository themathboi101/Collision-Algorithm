var fixedRect;
var movingRect;
function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(200,200,80,20);
 movingRect=createSprite(200,200,100,120);
}

function draw() {
  //background(255,255,255);  
  background("yellow");
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 &&
     fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2){
      movingRect.shapeColor="green";
      fixedRect.shapeColor="green"
    }
else {
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}


  
drawSprites();

}



