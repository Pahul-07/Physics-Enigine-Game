const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

score=0;

function preload(){
 polygonImg = loadImage("Images/shield.png");
 yayaImg = loadImage("Images/yay.png");
 //blank = loadImage("images/blank.png")
 //bgImg=loadImage("baaa.png");
}

function setup(){
    createCanvas(1200,700);
  
    bg = Bodies.circle(600,370,20);
    engine= Engine.create()
    world = engine.world
    Engine.run(engine)

    stand1= new Ground(660,160,100,5);
    stand2= new Ground(900,315,100,5);
    stand3= new Ground(147,447,100,5);
    stand4= new Ground(500,510,100,5);

    villain1=new Box(650,95,70,140);
    villain2=new Box(890,240,70,140);
    villain3=new Box(490,425,70,140);

    vd = new Villain();

    captain= new CA();
    World.add(world,captain);

    polygon = Bodies.circle(147,355,20);
    World.add(world,polygon);

    sling1= new Bow({x:147,y:355}, polygon);

}    


function draw(){
  background(255);
//textSize(20)
//text(mouseX+":"+mouseY,100,50)
 imageMode(CENTER);

  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();

  villain1.display();
  villain2.display();
  villain3.display();

  sling1.display();
  captain.display();

  fill("black")
  textFont("hobo");
  textSize(30);
  text("Press space to reset the position of Arrow",70,70);
  text("1",490,535);
  text("2",892,340);
  text("3",650,186);

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 80, 10);

}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
  
function mouseReleased(){
  sling1.fly();
}

function keyPressed(){
    if(keyCode===32){
    Matter.Body.setPosition(polygon,{x:147,y:355})
    sling1.attach(polygon);}
}
