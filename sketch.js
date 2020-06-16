var bullet,bullet1,bullet2,wall,wall1,wall2;
 var thickness;
 
bullet.weight = 2260
bullet1.weight = 1522
bullet2.weight = 3000

thickness = random(2,8);



function setup() {
  speed = random(4,7);
  speed1 = random(5,9);
  speed2 = random(3,3);

  bullet = createSprite(48,110,20,5);
  bullet1 = createSprite(50,210,20,5);
  bullet2 = createSprite(48,300,20,5);
  
  wall = createSprite(1250,98,thickness,100);
  wall1 = createSprite(1250,198,thickness,110);
  wall2 = createSprite(1250,300,thickness,100);

  bullet.velocityX = speed;
  bullet1.velocityX =speed1;
  bullet2.velocityX = speed2;
  
  createCanvas(1600,400);
  bullet.shapeColor =("orange");
  bullet1.shapeColor =("red"); 
  bullet2.shapeColor = ("yellow"); 

  wall.shapeColor = ("orange"); 
  wall1.shapeColor =("red"); 
  wall2.shapeColor = ("yellow");
}

function draw() {
  background(3,25,255); 
  if(wall1.isTouching(bullet1)){
    bullet1.shapeColor = ("pink");
  }

  if(wall2.isTouching(bullet2)){
    bullet2.shapeColor = ("cyan");
  }
 
  if(wall.isTouching(bullet)){
    bullet.shapeColor = ("green");
  }
  bullet.collide(wall);
  bullet1.collide(wall1);
  bullet2.collide(wall2);
  drawSprites();
}