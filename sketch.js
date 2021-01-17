var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine,world;


var box1,ground;
var boxes = [];
 
var value;
var Slider;
 
function setup() {
    createCanvas(500, 500);

    
    engine = Engine.create();
    world = engine.world; 
    Slider = createSlider(0, 20,2);
    Slider.position(100, 475);
    Slider.input = map(engine.world.gravity, Slider.min, Slider.max, 0, 1);
    ground = new Ground(0,490,1000,40);
}
 
function mousePressed() {
    //fill(255, 0, 0);
    box1 = new Box(mouseX,mouseY,random(10,80),random(10,80));
    boxes.push(box1);
    
}
 
function draw() {
    background(10,0,0);
    value = Slider.value();
    world.gravity.y = value;
    Engine.update(engine);
    for(var i = 0; i < boxes.length; i++){
      boxes[i].display();
    }
    ground.display();
  text("GRAVITY",300,492);
  textSize(20);
}


