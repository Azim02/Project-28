
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var dustbinObj,groundObject	
var world;
var paperObj;
var dustbinImg;

function preload() 
{
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() 
{
	createCanvas(1300, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,670,width,20);
	dustbinObj = new dustbin(1100,650);
	paperObj = new Paper(150,650,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();

  keyPressed();

  drawSprites();
}

function keyPressed()
{
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:0.05,y:-0.20});
	
	  }
}