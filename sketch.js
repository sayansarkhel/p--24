const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone,rubber,iron,hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    iron = new Iron(300,350);
    plane = new Plane(600,height,1200,20)
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);
    stone = new Stone(700,320,100,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    plane.display();
    rubber.display();
    hammer.display();
  stone.display();
  iron.display();
}

