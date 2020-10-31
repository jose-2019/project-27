const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;






function preload()
{
	
}

function setup() {
	createCanvas(6000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob1=new Bob1(460,400,70);
	bob2= new Bob1(530,400,70);
	bob3= new Bob1(600,400,70);
	bob4= new Bob1(670,400,70);
	bob5= new Bob1(740,400,70);

ground= new Ground(500,200,6000,25);

 chain1=new Chain(ground.body,bob1.body);
 chain2=new Chain(ground.body,bob2.body);
 chain3=new Chain(ground.body,bob3.body);
 chain4=new Chain(ground.body,bob4.body);
 chain5=new Chain(ground.body,bob5.body);

}


function draw() {
  rectMode(CENTER);
  background(300);
  
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 ground.display();

 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();



}

function keyPressed(){


if(keyCode === UP_ARROW){

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-55});
	
console.log("hiii");

}

}


