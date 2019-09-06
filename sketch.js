function setup() {
  createCanvas(600, 600);
}

function draw() {
  noStroke();
  
  background(235);
  translate(width / 2, height / 2);

  var h = hour();
  var m = minute();
  var s = second();
  
  rotate(PI*h/12);
  scale(h/24);
  fill(0, 51, 160, 191);
  triangle(0, 0, h, h+200+m, h+50, h+100);
  
  fill(185, 217, 235, 127)
  circle(h+m+s, h+m+s, s*10+100, s*10+100);
  
  fill(0, 114, 206, 191)
  translate(p5.Vector.fromAngle(PI*s/30, h+m));
  rect(h, h, m*5+50, m*5+50);
  
}