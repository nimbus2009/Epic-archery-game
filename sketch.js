const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var cBase;
var pBase;

var player;
var comp;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  cBase=new compBase(200,height-100);
  pBase=new compBase(width-200,height-100);

  player=loadImage("assets/player.png");
  comp=loadImage("assets/player.png");

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  cBase.display();
  pBase.display();
   //display Player and computerplayer
  image(player,200,height-180,50,100);
  image(comp,width-200,height-180,50,100);
}
