const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var body;


var box1,box2,box3,box4,box5; 
var bird1, slingshot1,platform;

//games state
var gameState = "onSling";




function setup(){
    var canvas = createCanvas(1200,400);
    canvas.position(15, 70);
    engine = Engine.create();
    world = engine.world;
    body=engine.Bodies;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    

    

    box5 = new Box(810,160,70,70);
    

     
   
    
    slingshot1 = new Slingshot(bird1.body,{x:200, y:50});
}

function draw(){
    background("cyan")
         
    
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
   

    box5.display();
    

    bird1.display();
    

    platform.display();
   
    slingshot.display(); 
}


//pull the bird with the rubber band when mouse is dragged
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
        Matter.Body.applyForce(bird1.body, bird1.body.position, {x:5,y:-5})
        
        return false;
    }
}
//fly the bird when mouse is released
function mouseReleased(){
    gameState = "launched";
  
}

//set next bird when space key is pressed
function keyPressed(){
    if((keyCode === 32) && gameState ==="launched"){
        if(birds.length>=0 ){   
            Matter.Body.setPosition(bird1.body, {x: 200 , y: 50});         
            slingshot.attach(bird1.body);
            
            gameState = "onSling";
           
        }
        
    }
    
}

