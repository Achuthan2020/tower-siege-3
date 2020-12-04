class Blocks {
    constructor(x,y,width,height){
        var options={
            'restitution':0.5,
            'friction':0.3,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
    }
}
