class ComputerArcher{
    constructor(x,y,width,height,angle) {
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.a=angle;

        this.image=loadImage("./assets/playerArcher.png");

        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,{
            isStatic:true
        })
        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;
        var angle = this.a;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}