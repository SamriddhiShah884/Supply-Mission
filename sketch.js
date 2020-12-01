var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var e1, e2,e3;
var Y=1;
var N=0;
var state=Y;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	e1=createSprite(360,650,200,15,{isStatic:true});
	e2=createSprite(265,600,15,100,{isStatic:true});
	e3=createSprite(455,600,15,100,{isStatic:true});

	e1.shapeColor="red";
	e2.shapeColor="red";
	e3.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;


 packageSprite.collide( e1);
 packageSprite.collide( e2);
 packageSprite.collide( e3);

if(packageSprite.isTouching(e1)){
	state=N;
}
if(packageSprite.isTouching(e2)){
	state=N;
}
if(packageSprite.isTouching(e3)){
	state=N;
}

 if(state===Y){
	packageSprite.x=helicopterSprite.x;
 if(keyDown("right")){
	helicopterSprite.x=helicopterSprite.x+10;
 }
 if(keyDown("left")){
	helicopterSprite.x=helicopterSprite.x-10;
 }
}


  drawSprites();
 

}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false);
   // packageSprite.velocityY=-2;
  }
}



