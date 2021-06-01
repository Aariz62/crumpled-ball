
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
        
    ground = Bodies.rectangle(600,580,1200,10, {isStatic:true} );
 	World.add(world, ground);

	 paperBall=createSprite(200,300,50,50)

	boxleftSprite=createSprite(1100,550, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(1100+20,550, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(1100+100, 550+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(1100+100,550+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(1100+200 , 550, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(1100+200-20 , 550, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paperBall.x=mouseX
  paperBall.y=mouseY
}

if(paperBall.isTouching(boxBase)){
	paperBall.x=boxbase.x
	paperBall.y=boxbase.y
	textSize(32)
	text("GameOver",600,300)
}

