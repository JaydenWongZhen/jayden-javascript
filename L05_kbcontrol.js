// write your codes here
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

function keyPressed() {
    rectsize=100;
    if (key === 'r') {
     fill('red');
     circle(width/2,height/2,100);
    }
    else if (key === 'g') {
        fill('green');
        rect(50,50,50,50);
    }
    else if (key === 'b') {
        fill('blue');
    }
    else {
        fill('white');
    }
}
function keyReleased() {
    rectsize=50;
}
