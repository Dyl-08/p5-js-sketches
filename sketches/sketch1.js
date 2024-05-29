function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(32);
  if(keyCode === LEFT_ARROW) {
    fill(0, 0, 255);
    circle(100, 100, 50)
  } else if(keyCode === RIGHT_ARROW) {
    fill(0, 255, 0);
    circle(200, 200, 50);
  } else if(keyCode === 32) {
    fill(255);
    circle(mouseX, mouseY, 75);
  }
}
