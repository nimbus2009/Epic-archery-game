var obimg;

class playerBase {
    constructor(x,y) {
        this.x=x;
        this.y=y;

        Bodies.rectangle(this.x,this.y,200,100,{
            isStatic:true,
        });

        pbimg=loadImage("assets/base1.png");
    }
    display() {
        imageMode(CENTER)
        image(pbimg,this.x,this.y,200,100);
    }
}