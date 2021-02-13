var movingRect, fixedRect;
var gameObject1,gameObject2,gameObjec3,gameObject4;


function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(300, 400, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect = createSprite(400,200,50,80);
  fixedRect.shapeColor = "green";
  //fixedRect.velocityY = 5;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,0,50,50);
  gameObject3.shapeColor = "green";
  gameObject3.velocityY = 5;

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";

}

function draw() {
  background(0,0,0); 
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  bounceOff(movingRect,gameObject3);


  edges = createEdgeSprites();

  movingRect.bounceOff(edges);
  gameObject3.bounceOff(edges);


  drawSprites();
}



