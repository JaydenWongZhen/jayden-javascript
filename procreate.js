function setup() {
createCanvas(600,400);
background(150);
}

function draw() {
    
}
function mouseDragged() {
    fill(0,0,0)
    noStroke();
    circle(mouseX,mouseY,20)
}
function keyPressed() {
    if (key === 'r') {
        fill('red')
    }
    else if (key === 'y') {
            fill('red')
    }
}