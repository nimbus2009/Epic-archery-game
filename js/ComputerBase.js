class ComputerBase {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, this.y, this.width, this.height, options);
    this.image = loadImage("./assets/base2.png");

    World.add(world, this.body);
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
}
