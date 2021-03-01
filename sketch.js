
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundBody;
var ballBody;
var box1,box2,box3;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundBody = new Ground(600,380,1200,20);
	ballBody = new Ball(50,350,40);
	box1 = new Dustbin(900,300,200,20);
    box2 = new Dustbin(990,200,20,200);
	box3 = new Dustbin(810,200,20,200);
	Engine.run(engine)
}


function draw() {
	rectMode(CENTER);
	background(255);
	ballBody.display();
	groundBody.display();
	box1.display();
	box2.display();
	box3.display();
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(ballBody.body,ballBody.body.position,{x:85,y:-85});
	}
};