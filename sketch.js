const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,ground1,ground2,ground3;
var box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var polygon1, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(500,270,250,15);
    ground3 = new Ground(1000,300,250,15)

    box1 = new Box(520,240);
    box2 = new Box(590,240);
    box3 = new Box(560,200);
    box4 = new Box(450,240);
    box5 = new Box(490,200);
    box6 = new Box(540,180);
    
    box6 = new Box(1090,240);
    box7 = new Box(1040,240);
    box8 = new Box(1065,160);

    polygon1 = new Polygon(100,100,40,40);

  
    slingshot = new SlingShot(polygon1.body,{x:200, y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground1.display();
    ground2.display();
    ground3.display();

    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();

    polygon1.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}