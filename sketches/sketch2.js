let keyHeld = false;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(32); 
}

function draw() {
}

function keyPressed() {
  if (!keyHeld) {
    background(32);
    fill(255, 255, 0); 
    ellipse(width / 2, height / 2, 150, 100); 
  }
  keyHeld = true; 
}

function keyReleased() {
  if (keyHeld) {
    background(32);
    fill(255);
    ellipse(mouseX, mouseY, 50, 75); 
  }
  keyHeld = false; 
}

function doubleClicked() {
  clear(); 
  background(32); 
}

