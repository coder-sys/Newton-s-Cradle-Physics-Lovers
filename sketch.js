const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies
var engine,world,frame,c1
a = 300
var x = 266
var ball = []
function setup() {
var cnvs =   createCanvas(800,400);
engine = Engine.create()
world = engine.world
Engine.run(engine)
frame = new Frame(400,200,300,20,true) 
for(var b = 0;b<7;b++){
  ball.push(new Pendullam(a,248,20))
  a += 30
}
for(var g = 0;g< ball.length;g++){
c1 = new Constraint(ball[g].body,x,197)
x+=40
}
}

function draw() {
  background(0) 
  Engine.update(engine)
  frame.appear()
  for(var t = 0;t<ball.length;t++){
    ball[t].appear()
  }
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball[0].body,{x:mouseX,y:mouseY})
}