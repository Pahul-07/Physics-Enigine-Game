class Box{
    constructor(x,y,w,h){
        var options={
            friction:0,
            restitution:0.5
        }
        
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("Images/villain.png");
        this.v2   =loadImage("Images/villainDead.png");
        this.hat  =loadImage("Images/hat.png");
        World.add(world, this.body);
        this.visibility=255;
        this.width=w;
        this.height=h;
    }
    display(){
        if(this.body.speed<1){
        push ();
        translate(0,0);
        rotate (this.body.angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
        pop(); 
    } else {
        image(this.v2,this.body.position.x,this.body.position.y,this.width+20, this.height);
        image(this.hat,this.body.position.x+50,this.body.position.y+50,this.width+1700, this.height+1000);
        }
  
    }

}