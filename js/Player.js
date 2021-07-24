class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);

    this.life1="green";
    this.life2="green";
    this.life3="green";
  }

 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  life() {
    fill(this.life1);
    rect(200,50,75,25);
    fill(this.life2);
    rect(275,50,75,25);
    fill(this.life3);
    rect(350,50,75,25);
    
    if(playerLife==2) {
      this.life3="red";
    }
    
    if(playerLife==1) {
      this.life3="red";
      this.life2="red";
    }
    
    if(playerLife==0) {
      this.life3="red";
      this.life2="red";
      this.life1="red";
    }

    if(playerLife==2.5) {
      this.life3="yellow";
    }
    
    if(playerLife==1.5) {
      this.life3="yellow";
      this.life2="yellow";
    }
    
    if(playerLife==0.5) {
      this.life3="yellow";
      this.life2="yellow";
      this.life1="yellow";
    }
  }
}
