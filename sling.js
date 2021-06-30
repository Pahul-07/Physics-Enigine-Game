class Sling{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            stiffness:0.04,
            length:1
        }
        this.sling= Constraint.create(options);
        World.add(world,this.sling);

        this.pointB=b;
    }
    display(){
      if(this.sling.bodyA){
         push();
         strokeWeight(3);
         stroke("darkBlue");
         line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y);
         pop();
       }
    }

    fly(){
        this.sling.bodyA=null;
    }

    attach(body){
        this.sling.bodyA= body
    }

}