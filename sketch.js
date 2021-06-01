var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var yStart = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  //ground1 = new Ground(width/2,height,width,20);
  ground1 = new Ground(0,height,320,20);
  ground2 = new Ground(395,height,160,20);
 
  ground3 = new Ground(800,height,320,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  yStart = height- divisionHeight/2+100

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("score: "+ score, width-800,50)
//add the text for which bin is which score

 
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
  
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var f = 0; f<particles.length;f++){
    particles[f].display();
    if (particles[f].body.position.y>yStart){
      score++;
    }
  }


}

function mouseClicked(){
  particles.push(new Particle(mouseX,10,10))
}