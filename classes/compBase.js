var cbimg;

class compBase {
    constructor(x,y) {
        this.x=x;
        this.y=y;

        Bodies.rectangle(this.x,this.y,200,100,{
            isStatic:true,
        });

        cbimg=loadImage("assets/base1.png");
    }
    display() {
        imageMode(CENTER)
        image(cbimg,this.x,this.y,200,100);
    }
}