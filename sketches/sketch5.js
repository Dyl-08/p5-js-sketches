function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(32); 
}

function draw() {
}

function mousePressed() { // if the mouse is pressed 10 circles of randomly different colours will iterate through the for loop through the variable i. 
  for (let i = 0; i < 10; i++) {
    fill(random(255), random(255), random(255));
    rect(mouseX + i * 30, mouseY, 20, 20); // The circles are separated by 30 units.
  }
}

