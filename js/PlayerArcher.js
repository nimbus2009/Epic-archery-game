class PlayerArcher{
    constructor(x,y,width,height,angle) {
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.a=angle;

        this.image=loadImage("./assets/computerArcher.png");

        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,{
            isStatic:true,

        });
        Matter.Body.setAngle(this.body,this.a);
        World.add(world,this.body);
    }
    
    display() {

        if (keyIsDown(UP_ARROW) && this.a <= (-PI/2)+0.5) {
            this.a += 0.02;

          }
          if(keyIsDown(DOWN_ARROW) && this.a >= (-PI/2)-0.5){
            this.a -= 0.02;
          }

          Matter.Body.setAngle(this.body,this.a);

        var pos = this.body.position;
        var angle = this.a;
        push();
        translate(pos.x-50, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0+50, this.w, this.h);
        pop();
    }
}
