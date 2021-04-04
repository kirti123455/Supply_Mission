const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body = Matter.Body;


var packet, packetImg;
var chopper, chopperImg;
var ground, leftRect, baseRect, rightRect;

function preload(){
chopperImg= loadImage("helicopter.png")
packetImg= loadImage("package.png")
}

function setup(){
  createCanvas(600,400);

 

  packet1= createSprite(120,50,15,15);
  packet1.addImage("packet", packetImg);
  packet1.scale= 0.2;

  chopper= createSprite(120,50,20,20);
  chopper.addImage("helicopter", chopperImg);
  chopper.scale= 0.5;

  ground1=createSprite(300,380,600,15)
  ground1.shapeColor= "white";

  leftRect= createSprite(200,345,10,50);
  leftRect.shapeColor= "red";

  baseRect1= createSprite(250,365,90,10);
  baseRect1.shapeColor="red";

  rightRect= createSprite(300,345,10,50);
  rightRect.shapeColor="red";

  engine= Engine.create();
  world= engine.world;

  baseRect= Bodies.rectangle(250,365,90,10,{isStatic:true});
  World.add(world,baseRect);

  ground= Bodies.rectangle(300,380,600,15,{isStatic: true});
  World.add(world,ground);

  options={
	 
	isStatic: true,
}
packet= Bodies.rectangle(120,50,15,15,options);
World.add(world,packet);

}

function draw(){
	background(0)
	Engine.update(engine);
    
	packet1.x= packet.position.x;
	packet1.y= packet.position.y;

	baseRect1.x= baseRect.position.x;
	baseRect1.y= baseRect.position.y;
	

	//image(packetImg,120,50,30,30 )
	drawSprites();
}

function keyPressed(){
 
	if(keyCode === DOWN_ARROW){
     Matter.Body.setStatic(packet, false);

	}
   
	if(keyCode === LEFT_ARROW){
		chopper.x= chopper.x - 10;
		translation={x:-10,y:0}
        Matter.Body.translate(packet, translation)
	}

	if(keyCode === RIGHT_ARROW){
		chopper.x= chopper.x + 10;
		translation={x:10,y:0}
        Matter.Body.translate(packet, translation)
	}
}