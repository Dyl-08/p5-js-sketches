let keyHeld = false; // variable to track whether a key is being held down

function setup() {
  createCanvas(windowWidth, windowHeight); // create the canvas with full window size
  background(32); // set the background color to dark grey
}

function draw() {
  // we can leave the draw function empty
}

function keyPressed() {
  if (!keyHeld) { // if no key was previously held down
    background(32); // refresh the background to remove previous drawings
    fill(255, 255, 0); // set fill color to yellow
    ellipse(width / 2, height / 2, 150, 100); // draw a yellow ellipse in the center
  }
  keyHeld = true; // mark that a key is now being held down
}

function keyReleased() {
  if (keyHeld) { // if a key was previously held down
    background(32); // refresh the background to remove previous drawings
    fill(255); // set fill color to white
    ellipse(mouseX, mouseY, 50, 75); // draw a white ellipse at the mouse position
  }
  keyHeld = false; // mark that no key is being held down anymore
}

function doubleClicked() {
  clear(); // clear the canvas
  background(32); // reset the background color to dark grey
}
