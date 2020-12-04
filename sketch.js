var ball,blocks,desk;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ball=new Hexagonalball(200,200,20,20);
  blocks=new Blocks(400,200,20,20);
  desk=new Desk(600,200);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ball.display()
  blocks.display();
  desk.display();
}