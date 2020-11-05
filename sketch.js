
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1, bin2, bin3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background("225")


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,50);
	
	ground = new Ground(50,695,1500,20);

	bin1 = new Bin(500, 650, 100, 100 );
	bin2 = new Bin(700, 650, 100, 100);
	bin3 = new Bin(600, 650, 100, 100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  keyPressed();
 paper.display();
 bin1.display();	
 bin2.display();
 bin3.display();
 ground.display();
 
}





function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:13, y:-85});

	}
}



