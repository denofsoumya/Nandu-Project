const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5
var rope1
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var bob_options={
		isStatic:true			
	}
	//rope1=new Rope(bob1,roof,-80,0)

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	bob1 = Bodies.circle(400,300,20,bob_options)
	World.add(world,bob1);
	rope1=new Rope(bob1,roof,-80,0)
	
	
Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();

  ellipseMode(RADIUS)
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20,20)

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
