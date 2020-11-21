function setup() {
  createCanvas(1200, 700);
  noStroke();
}

function draw() {
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let s = map(height, 0, width, -5000, 700);
  let m = map(height, 0, width, -5000, 500);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let h = map(height, 1, width, -5000, 100);
  fill(255, 90, 12);
  
//arc(50, 55, 50, 50, 0, HALF_PI);
fill ("black");
stroke("yellow")
strokeWeight(3)
arc(width/2, height/2, 380, 380, -HALF_PI, s + PI);
stroke("green")
strokeWeight(5)
arc(width/2, height/2, 350, 350, -HALF_PI, m + PI);
stroke("blue")
strokeWeight(8)
arc(width/2, height/2, 320, 320, -HALF_PI, h + PI);
 noStroke()
 fill(255, 90, 12);
ellipse(width/2, height/2, 300, 300);
}

