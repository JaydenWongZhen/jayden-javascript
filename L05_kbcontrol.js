// write your codes here
let xpos = 100;
let ypos = 100;
function setup() {
    createCanvas(600,400);
    background(150);
}
let rectsize=50
function draw() {
    // background(220);
    // noStroke();
    // let xpos=50;
    // let ypos=50;
    // rect(xpos,ypos,rectsize,rectsize);
}

// function mousePressed() {
//     fill(random(255),0,random(255));
//     ;noStroke()
//     circlesize=5
// }
// function mouseDragged() {
//     circle(mouseX,mouseY,circlesize);
//     circlesize = circlesize + 0.5;
// }

// function keyPressed() {
//     rectsize=100;
//     if (key === 'r') {
//      fill('red');
//      circle(width/2,height/2,100);
//     }
//     else if (key === 'g') {
//         fill('green');
//         rect(50,50,50,50);
//     }
//     else if (key === 'b') {
//         fill('blue');
//         rect(100,100,100,100);
//     }
//     else {
//         fill('white');
//         triangle(50,250,200,0,250,250)
//     }
// }
// function keyReleased() {
//     rectsize=50;
// }

// function keyPressed() {
//     background(220);
//     textSize(64);
//     text(key,50,50);
//     text(keyCode,50,150);
// }

// function keyPressed() {
//     if (keyCode === 38) {
//         fill(255,0,0);
//         circle(100,100,50);
//     }
//     else if (keyCode === 40) {
//         fill (0,0,0);
//         circle(100,100,50);
//     }
// }

function draw() {
background(220);
if (keyIsDown(39)) {
    xpos = xpos + 5;
}
if (keyIsDown(37)) {
    xpos = xpos - 5;
}
if (keyIsDown(38)) {
    ypos = ypos -5;
}
if
fill("yellow");
circle(xpos,ypos,50);
}