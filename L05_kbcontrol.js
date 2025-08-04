// write your codes here
function setup() {
createCanvas(600,400);
background(150);
}

function draw() {
;noStroke()
let xpos=50;
let ypos=50;
}
let rectsize=10
// function mousePressed() {
//     fill(random(255),0,random(255));
//     ;noStroke()
//     circlesize=5
// }
// function mouseDragged() {
//     circle(mouseX,mouseY,circlesize);
//     circlesize = circlesize + 0.5;
// }

function keyPressed() {
    rectsize=100;
}
function keyReleased() {
    rectsize=50;
}