function setup() {
  createCanvas(windowWidth, windowHeight); // canvas size set to windowWidth and windowHeight 
}

function draw() {
  background(32);
  if(keyCode === 65) { // if 'A' key is pressed
    fill('purple'); // set the fill colour to purple
    triangle(100, 100, 150, 50, 200, 100); // triangle coordinates
  } else if(keyCode === 66) { // else if 'B' key is pressed
    fill('orange'); // set the fill colour to orange 
    triangle(250, 250, 300, 200, 350, 250); // tirnalge coordinates
  } 
}

function mousePressed() { // ensures that if the mouseIsPressed a equilateral triangle of side length 100 is centered at the mouse coordinates
  fill(255);
  triangle(mouseX, mouseY, mouseX + 50, mouseY - 50, mouseX + 100, mouseY)
}

