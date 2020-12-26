var hr , mn , sc , hrAngle , scAngle , mnAngle

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);
  translate(200,200)
  rotate(-90)
  hr = hour();
  hrAngle = map(hr % 12,0,12,0,360)
  mn = minute();
  mnAngle = map(mn,0,60,0,360)
  sc = second();
  scAngle= map(sc,0 , 60 , 0 , 360)

  push()
rotate(scAngle); 
stroke("red"); 
strokeWeight(7); 
line(0,0,100,0)
pop()
push()
rotate(mnAngle)
stroke("cyan"); 
strokeWeight(7); 
line(0,0,75,0)
pop()
push()
rotate(hrAngle)
stroke("lime"); 
strokeWeight(7); 
line(0,0,50,0)
pop()
stroke(255,0,255)
point(0,0)
}