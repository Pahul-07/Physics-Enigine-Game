class Villain{
    constructor(x,y,w,h){
        this.image=loadImage("Images/villainDead.png");
        this.visibility=255;
        this.width=w;
        this.height=h;
    }
    display(){
        push ();
        imageMode(CENTER);
        image(this.image,655,88,140,140);
        pop(); 
    }
}
