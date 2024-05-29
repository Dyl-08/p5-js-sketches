function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(32);
  if(keyCode === 65) {
    fill('purple');
    triangle(100, 100, 150, 50, 200, 100);
  } else if(keyCode === 66) {
    fill('orange');
    triangle(250, 250, 300, 200, 350, 250);
  } 
}

