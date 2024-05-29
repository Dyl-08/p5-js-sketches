function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(32); 
}

function draw() {
}

function mousePressed() {
  for (let i = 0; i < 5; i++) {
    stroke(random(255), random(255), random(255)); 
    noFill();
    circle(mouseX, mouseY, i * 50);
  }
}

