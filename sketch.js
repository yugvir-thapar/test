function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var car,wall,car_options,wall_options;
  var weight,speed;
  var Deformation
}

function draw() {
  background(255,255,255);  
  var wall_options ={
    isStatic: true
  }
  var car_options= {
    restitution:1.0
  }
  speed = random(10,20);
  weight =random (400,1500);
car = createSprite(50,200,50,50,car_options);
wall = createSprite(1500,200,60,height/2,wall_options);

car.velocityX = speed;
 Deformation = 0.5*speed*weight*speed/15000;
if(Deformation<100){
  shapecolor = "green";
}
if(Deformation>100&&Deformation<180){
  shapecolor ="yellow"
}
if(Deformation>180){
  shapecolor = "red";
}
  drawSprites();
}