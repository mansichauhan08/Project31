const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,ground2,ground3,ground4;
var division1, division2, division3, division4, division5, divisionLeft, divisionRight, divisionBottom; 
var plinkos = [];
var particles =[];
var a = 0;

function setup(){
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,0,480,20);
  ground2 = new Ground(240,800,480,20);
  ground3 = new Ground(0,400,20,800);
  ground4 = new Ground(480,400,20,800);

  divisionBottom = new Division(240,785,460,10);
  divisionLeft = new Division(15,640,10,300);
  divisionRight = new Division(465,640,10,300);
  division1 = new Division(90,640,10,300);
  division2 = new Division(165,640,10,300);
  division3 = new Division(240,640,10,300);
  division4 = new Division(315,640,10,300);
  division5 = new Division(390,640,10,300);

  for(var j = 50; j <= 460; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j = 30; j <= 460; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for(var j = 50; j <= 460; j = j+50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j = 30; j <= 460; j = j+50){
    plinkos.push(new Plinko(j, 375));
  }
}


function draw(){
  background("black");
  Engine.update(engine);
  text(mouseX + ", " + mouseY, 100,100);

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  divisionBottom.display();
  divisionLeft.display();
  divisionRight.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();

  for(var j=0; j<plinkos.length ; j = j+1){
    plinkos[j].display();
  }

  if(a%50 === 0){
    particles.push(new Particles(Math.round(random(30,450)), 20));
  }

  for(var j=0; j<particles.length ; j = j+1){
    particles[j].display();
  }
  a = a+1;
}