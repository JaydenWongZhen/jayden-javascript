// write your codes here
function setup() {
createCanvas(600,400);
background(150);
}

function draw() {

}

function mousePressed() {
    fill(random(255),random(255),random(255));
    ;noStroke()
}
function mouseDragged() {
    circle(mouseX,mouseY,circlesize)
    circlesize= circlesize + 0.5;
}