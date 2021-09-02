
var astronaut,eat,bg,sleep,brush,gym,drink,move,bath;



function preload(){



bg= LoadImage("iss(2).png/iss.png");

sleep = LoadAnimation("sleep(2).png/sleep.png");

brush = LoadAnimation("brush(2).png/brush.png");

gym = LoadAnimation("gym11(2)/gym11.png","gym12(2).png/gym12.png");

eat = LoadAnimation("eat1(2).png/eat1.png","eat2(2).png/eat2");

drink = LoadAnimation("drink1(2).png/drink1.png");

move = LoadAnimation("move1.png/move1(2).png","move.png/move(2).png");

bath = LoadAnimation("bath1(2).png/bath1.png","bath2(2).png/bath2.png");

}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(400,200);
  bg.addImage("background",bg);
  bg.scale = 1;


  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255); 
  
  edges= createEdgeSprites();
    astronaut.bounceOff(edges);

  

  drawSprites();

  textSize(20);
  textFill(255);
  text("Instructions:",790,10);

  textSize(20);
  textFill(255);
  text("Up arrow = Brushing",790,20);

  textSize(20);
  textFill(255);
  text("Down arrow = Gymming",790,30);

  textSize(20);
  textFill(255);
  text("Left arrow = Eating",790,40);

  textSize(20);
  textFill(255);
  text("Right arrow = Bathing",790,50);

  textSize(20);
  textFill(255);
  text("M key = Moving",790,60);

  if(keyDown("Up")){

    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("down")){

    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("left")){

    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 50;
    astronaut.velocityY = 3;
    astronaut.velocityX = 3;
  }

  if(keyDown("M")){

    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.x = 350;
    astronaut.velocityY = 3;
    astronaut.velocityX = 3;
  }

}