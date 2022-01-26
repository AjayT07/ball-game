//declaring global variables
var box;

//pre defined function that runs once at the start of the code
//its used to create things
function setup() {
  createCanvas(400,400);

  //creating a box sprite
  box=createSprite(200, 200, 40, 40);
}

//pre defined function runs continuously for every frame
function draw() 
{
  background("cyan");

  if (keyDown(LEFT_ARROW)){
   box.x-=5
   }

   if (keyDown(RIGHT_ARROW)){
    box.x+=5
   }

   if (keyDown(UP_ARROW)){
    box.y-=5
   }

   if (keyDown(DOWN_ARROW)){
    box.y+=5
   }

  drawSprites();
}




