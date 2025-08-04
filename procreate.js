let shapeColor = "pink";


function setup() {
createCanvas(600,400);
background(150);
}

function draw() {
    
}
function mouseDragged() {
    fill(0,0,0)
    noStroke();
    fill(shapeColor);
    circle(mouseX,mouseY,20)
}
function keyPressed() {
    if (key === 'r') {
        shapeColor = color("red");
    }
    else if (key === 'y') {
        shapeColor = color("red");
    }
    else if (key === 'g') {
        shapeColor = color("red");
    }
    else if (key === 't') {
        shapeColor = color("red");
    }
    else if (key === 'b') {
        shapeColor = color("red");
    }
    else if (key === 'p') {
        shapeColor = color("red");
    }
    else if (key === 'w') {
        shapeColor = color("red");
    }
    else {
        shapeColor = color("red");
    }
}