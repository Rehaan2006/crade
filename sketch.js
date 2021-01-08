
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ball1,ball2,ball3;
var ground,ground2;
var balls=[];
var rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	 ground =new Ground(400,600,800,20);
	 ball=new Ball(300,250,50);
	 ball1=new Ball(320,250,50);
	 ball2=new Ball(360,250,50);
	 ball3=new Ball(390,250,50);
	 ground2=new Ground(400,200,200,20)
	 rope=new Slingshot(ball.body,{x:230,y:150});
	//Create the Bodies Here.
	 balls.push(ball);
	 balls.push(ball1);
	 balls.push(ball2);
	 balls.push(ball3);
    
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ground2.display();
  rope.display();
  drawSprites();
 
}



