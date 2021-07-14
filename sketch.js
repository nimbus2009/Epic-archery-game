const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;

var arrows=[];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 150,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    100,
    100,
    PI/2,
  );
  playerArcher = new PlayerArcher(
    345,
    playerBase.body.position.y - 180,
    100,
    100,
    -PI/2,
  );
  
  //Create an arrow Object
  
  arrow=new playerArrow(
    345,
    playerBase.body.position.y - 180,
    90,
    30,
    -PI/32,
  );
  //arrows.push(arrow);

  var vel = p5.Vector.fromAngle(playerArcher.angle);
  console.log(vel);
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  for(i=0;i<arrows.length;i++) {
    arrows[i].display();
  }
  
}

function keyPressed() {
  if(keyCode==32) {
    var anything=new playerArrow(
      345,
      playerBase.body.position.y - 180,
      45,
      10,
      -PI/32,
    );
    Matter.Body.setAngle(anything.body,playerArcher.body.angle+PI/2);
    arrows.push(anything);
  }
}

function keyReleased() {
  if(keyCode === 32){
    arrows[arrows.length-1].shoot(playerArcher.body.angle-(-PI*(3/6)));
  }
  //arrows.pop();
  //arrows.splice(2,2);
}
