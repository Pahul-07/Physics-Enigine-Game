class CA{
    constructor(){
        this.body= Bodies.rectangle(145, 400, 0,0,{isStatic:false});
        this.image= loadImage("Images/cap.png");
        World.add(world,this.body)
    }
      display(){
        push();
        imageMode(CENTER);
        image(this.image,155,378,70,130);
        pop();
    }

}