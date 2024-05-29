function setup() {
  createCanvas(windowWidth, windowHeight); // creating the Canvas with windowWidth and windowHeight
}

function draw() {
  background(32);
  if(keyCode === LEFT_ARROW) { // keyCode for left arrow
    fill(0, 0, 255); // fill blue
    circle(100, 100, 50); // (coordinates and diameter)
  } else if(keyCode === RIGHT_ARROW) { // else if operaator
    fill(0, 255, 0); // fill green
    circle(200, 200, 50); // (coordinates and diameter)
  } else if(keyCode === 32) { // keycode 32 is spacebar
    fill(255); // fill white
    circle(mouseX, mouseY, 75); // circle appears at mouse coordinates with a diameter of 75
  }
}
