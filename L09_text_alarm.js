let xpos;
let xvel = 1;
function setup() {
    createCanvas(600,400);
    background(200);
xpos = width/2
}

function draw() {
     background(200);
    textSize(25);
    textAlign(CENTER,CENTER);
    text("the yoinky sploinky testing v1", xpos,height/2);
    xpos=xpos+xvel;
    xvel=xvel*9.
  if (xpos > width) {
    xvel=xvel* -1;
  }
  else if (xpos < 0) {
    xvel=xvel*-1;
  }
}