const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

//Declare an array for arrows playerArrows = [ ];
var playerArrows = [];
var computerArrows = []
var arrow;

var statusScore="Welcome player!";

let playerLife=3;
let computerLife=3;

function preload(){
  backgroundImg = loadImage("assets/background.gif");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  //Function to manage computer Arrows
  handleComputerArcher(); 

    textSize(5);
}

function draw() {
  background(backgroundImg);

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
  computerArcher.display();

  handlePlayerArrowCollision();

  computer.life();
  player.life();

 // Use for loop to display arrow using showArrow() function
 for (var i = 0; i < playerArrows.length; i++) {
  showArrows(i, playerArrows);
}

for (var i = 0; i < computerArrows.length; i++) {
  showArrows(i, computerArrows);
}


  //Call functions to detect collision for player and computer
  handleComputerArrowCollision();
}

function keyPressed() {

  if(keyCode === 32){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle = playerArcher.body.angle+PI/2;

    var arrow = new PlayerArrow(posX, posY, 100, 10);

    arrow.trajectory = [];
    Matter.Body.setAngle(arrow.body, angle);
    playerArrows.push(arrow);

  }
}

function keyReleased () {

  if(keyCode === 32){
    //call shoot() function for each arrow in an array playerArrows
    if (playerArrows.length) {
      var angle = playerArcher.body.angle+PI/2;
      playerArrows[playerArrows.length - 1].shoot(angle);
    }
  }

}
//Display arrow and Tranjectory
function showArrows(index, arrows) {
  arrows[index].display();
}

function handleComputerArcher() {
  if (!computerArcher.collapse && !playerArcher.collapse) {
    setTimeout(() => {
      var pos = computerArcher.body.position;
      var angle = computerArcher.body.angle;
      var moves = ["UP", "DOWN"];
      var move = random(moves);
      var angleValue;

      if (move === "UP") {
        angleValue = 0.1;
      } else {
        angleValue = -0.1;
      }
      angle += angleValue;

      var arrow = new ComputerArrow(pos.x, pos.y, 100, 10, angle);

      Matter.Body.setAngle(computerArcher.body, angle);
      Matter.Body.setAngle(computerArcher.body, angle);

      computerArrows.push(arrow);
      setTimeout(() => {
        computerArrows[computerArrows.length - 1].shoot(angle);
      }, 100);

      handleComputerArcher();
    }, 2000);
  }
}

function handlePlayerArrowCollision() {
// Write code to detect collision between player arrow and opponent
  textSize(20);
  for (var i = 0; i < playerArrows.length; i++) {
      if(playerArrows[i]!==undefined) {
        var collision=Matter.SAT.collides(playerArrows[i].body,computerArcher.body);
        var collision2=Matter.SAT.collides(playerArrows[i].body,computer.body);
        if(collision.collided) {
          var messages=["A close miss! Half a point!","Better luck next time. But still, half points ar yours!","Tip: Aim to the opponent's body for a full point. You get half point.","It's not bull's eye, but okay! You get half points..."];
          console.log(random(messages));
          statusScore=random(messages);

          computerLife-=0.5;

          World.remove(world,playerArrows[i].body);
          playerArrows.splice(i,1);
        }
        if(collision2.collided) {
          statusScore="You scored! Full 1 point!";
          if(playerArrows[i]!==undefined) {
            World.remove(world,playerArrows[i].body);
            playerArrows.splice(i,1);
            computerLife-=1;
          }
        }
      }
  }
  fill("black");
  text("Status: " + statusScore,width/2,height-50);
}

function handleComputerArrowCollision() {
  //Write code to detect collision between computer arrow and opponent
  // Write code to detect collision between player arrow and opponent
  textSize(20);
  for (var i = 0; i < computerArrows.length; i++) {
      if(computerArrows[i]!==undefined) {
        var collision=Matter.SAT.collides(computerArrows[i].body,playerArcher.body);
        var collision2=Matter.SAT.collides(computerArrows[i].body,player.body);
        if(collision.collided) {
          var messages=["A close miss! Half a point!","Better luck next time. But still, half points ar yours!","Tip: Aim to the opponent's body for a full point. You get half point.","It's not bull's eye, but okay! You get half points..."];
          console.log(random(messages));
          //statusScore="Computer shot you!";

          playerLife-=0.5;

          World.remove(world,computerArrows[i].body);
          computerArrows.splice(i,1);
        }
        if(collision2.collided) {
          statusScore="Computer shot you!";
          if(computerArrows[i]!==undefined) {
            World.remove(world,computerArrows[i].body);
            computerArrows.splice(i,1);
            playerLife-=1;
          }
        }
    }
  }
}

