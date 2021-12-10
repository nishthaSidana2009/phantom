let x = 400
let y = 400

function setup() {
  createCanvas(400, 400);
  stroke("red")
  strokeWeight(2)
  frameRate(10)
}

function draw() {
  background(0);
  x = x-1;
  if (x < 0) {
    x = width;
  }
  ellipse(x,0,width,y)
  y = y-1;
  if (y < 0) {
    y = height;
  }
  ellipse(0,y,x,height)
}