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

function mousePressed() {
  fill(255);
  let side = 100;
  let h = (sqrt(3) / 2) * side; // height of the equilateral triangle
  let x1 = mouseX;
  let y1 = mouseY - (2 / 3) * h;
  let x2 = mouseX - side / 2;
  let y2 = mouseY + (1 / 3) * h;
  let x3 = mouseX + side / 2;
  let y3 = mouseY + (1 / 3) * h;
  triangle(x1, y1, x2, y2, x3, y3);
}

