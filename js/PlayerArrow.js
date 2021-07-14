class playerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.trajectory=[];
    this.a=archerAngle;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }
  shoot(angle) {
      var velocity = p5.Vector.fromAngle(angle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
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

    var position=[this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    
    if(this.body.position.y<windowHeight&&this.body.position.x<width-340) {
      for(var j=0;j<this.trajectory.length;j++) {
        ellipse(this.trajectory[j][0],this.trajectory[j][1],5,5);
      }
    }
  }
}
