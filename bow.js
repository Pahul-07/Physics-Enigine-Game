class Bow{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling3 = loadImage('Images/hand.png');
        this.pointA = pointA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
       this.sling.bodyB=body;
    }
    fly(){
        this.sling.bodyB = null;
    }

    display(){
       // image(this.sling1,200,20);
       // image(this.sling2,170,20);
        if(this.sling.bodyB){
            var pointA = this.sling.pointA;
            var pointB = this.sling.bodyB.position;
            
 //           if(pointA.x < 220) {
                strokeWeight(1);
                line(pointA.x+38, pointA.y+33, pointB.x -5, pointB.y);
                line(pointA.x+37, pointA.y-35, pointB.x -5, pointB.y);
             //   image(this.sling3,pointA.x -30, pointA.y -10,15,30);
//            }
            //else{
//              strokeWeight(1);
//              line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
//              line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y);//            image(this.sling3,pointA.x + 25, pointA.y -10,15,30,5,5);
///            }       
        }  
    }
}