class Hexagonalball {
    constructor(x,y,width,height){
        var options={
            'restitution':0.5,
            'friction':0.3,
            'density':1.0
        }
        this.body=hexagon(x,y,width,height,options);
        this.width=width
        this.height=height
        this.ball=Constraint.create(options);
        World.add(world,this.ball)
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;    
        }
        push();
            
        stroke(48,22,8);
        if(pointA.x < 220) {
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sling3,pointA.x -30, pointA.y -10,15,30);
        }
        else{
            strokeWeight(3);
            line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
        }
       
        
        pop();
    }
    fly(){
        this.ball.bodyA = null;
    }
}

