let shapeColor = "black";


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
    if (key === 't') {
        circle(width/15, height/10, )
    }

    else if (key === 'r') {
        shapeColor = color("red");
    }
    else if (key === 'y') {
        shapeColor = color("yellow");
    }
    else if (key === 'g') {
        shapeColor = color("green");
    }
    else if (key === 't') {
        shapeColor = color("cyan");
    }
    else if (key === 'b') {
        shapeColor = color("blue");
    }
    else if (key === 'p') {
        shapeColor = color("magenta");
    }
    else if (key === 'w') {
        shapeColor = color("white");
    }
    else {
        shapeColor = color("black");
    }
}