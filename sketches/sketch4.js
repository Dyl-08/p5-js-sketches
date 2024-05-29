// SANE LOGIC AS SKETCH2 EXCEPT FOR MOUSEPRESSED/MOUSERELEASED

let mouseHeld = false;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(32); 
}

function draw() {
}

function mousePressed() {
  if (!mouseHeld) {
    background(32);
    stroke(255);
    line(0, 0, width, height);
  }
  mouseHeld = true; 
}

function mouseReleased() {
  if (mouseHeld) {
    background(32);
    stroke(0, 0, 255);
    line(width, 0, 0, height); 
  }
  mouseHeld = false; 
}


