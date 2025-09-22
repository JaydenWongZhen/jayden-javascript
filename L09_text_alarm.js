let xpos;
function setup() {
    createCanvas(600,400);
    background(200);
xpos = width/2
}

function draw() {
    
    textSize(25);
    textAlign(CENTER,CENTER);
    text("the yoinky sploinky testing v1", xpos,height/2);
    xpos=xpos+1;
    background(200);
}