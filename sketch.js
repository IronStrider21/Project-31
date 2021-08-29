
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];



var divisionHeight=300;


var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	ground1 = new Ground(240,780,480,20);
	
	for (var k=0; k <=width; k = k +80){
		divisions.push(new Divisions(k,height-divisionHeight/2,10, divisionHeight));
	}

	for (var j=25; j <=width; j = j +50){
		plinkos.push(new Plinko(j,75));
	}
	for (var m=45; m <=width-10; m = m +50){
		plinkos.push(new Plinko(m,125));
	}
	for (var j=25; j <=width; j = j +50){
		plinkos.push(new Plinko(j,175));
	}
	for (var m=50; m <=width-10; m = m +50){
		plinkos.push(new Plinko(m,225));
	}
	for (var m=30; m <=width-10; m = m +50){
		plinkos.push(new Plinko(m,275));
	}
	for (var m=45; m <=width-10; m = m +50){
		plinkos.push(new Plinko(m,325));
	}
	for (var j=25; j <=width; j = j +50){
		plinkos.push(new Plinko(j,375));
	}
	for (var m=50; m <=width-10; m = m +50){
		plinkos.push(new Plinko(m,425));
	}
	for (var m=30; m <=width-10; m = m +50){
		plinkos.push(new Plinko(m,475));
	}
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();

  for (j=0; j< plinkos.length;j++){
	plinkos[j].display();
}

  if (frameCount%60===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

 for (k=0; k<divisions.length;k++){
	 divisions[k].display();
 }
 for (l=0; l < particles.length;l++){
	particles[l].display();
}

  drawSprites();
 
}

//function keyPressed() {
 
//}



