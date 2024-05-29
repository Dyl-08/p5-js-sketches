function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(32); 
}

function draw() {
}

function mousePressed() {
  for (let i = 0; i < 9; i++) {
    fill(random(255), random(255), random(255));
    rect(mouseX + i * 30, mouseY, 20, 20);
  }
}

