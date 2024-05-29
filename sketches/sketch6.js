function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(32); 
}

function draw() {
}

function mousePressed() { // same logic as sketch5 except it is for circle outlines - each circle's radius keeps increasing by 50 units
  for (let i = 0; i < 5; i++) {
    stroke(random(255), random(255), random(255)); 
    noFill();
    circle(mouseX, mouseY, i * 50);
  }
}

