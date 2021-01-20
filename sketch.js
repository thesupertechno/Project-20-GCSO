var car,wall;
var speed,weight,deformation;
  
function preLoad() {
 
  //Creating the sprites

}

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);

  //setting the stats  
  speed=random(55,90);
  weight=random(400,1500);
  //setting what each stat conforms to
  car.velocityX=speed;
}



function draw() {
  background(255,255,255);
  //Calculations
  if (wall.x-car.x < (car.width+wall.width)/2)
  {
      deformation=0.5 * weight * speed * speed / 22500;
      car.velocityX=0;
  }
  //Car states and colors
  if (deformation<100) {
    car.shapeColor=color(0,255,0);  
  }
  
  if (deformation<180 && deformation>100) {
  car.shapeColor=color(230,230,0)
  }

  if (deformation>180) {
    car.shapeColor=color(255,0,0) ; 
  }
  drawSprites();
}